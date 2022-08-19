// material
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Container,
  Stack,
  Step,
  StepButton,
  Stepper,
  Typography,
} from '@mui/material';
// components
import { LoadingButton } from '@mui/lab';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Page from '../components/Page';
import FirstStep from '../components/steps/FirstStep';
import SecondStep from '../components/steps/SecondStep';
import api from '../providers/api';
// mock

// ----------------------------------------------------------------------

export default function DataIngestionNew() {
  const [activeSource, setActiveSource] = useState(undefined);
  const [requesting, setRequesting] = useState(false);
  const { jobId } = useParams();
  const navigate = useNavigate();
  const { handleSubmit, control, reset, getValues } = useForm({
    defaultValues: { campo1: '', campo2: '', campo3: '', campo4: '' },
  });
  const [currentJob, setCurrentJob] = useState(null);

  // wizard

  const steps = ['1 passo', '2 passo'];

  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const totalSteps = () => steps.length;

  const isLastStep = () => activeStep === totalSteps() - 1;

  const handleNext = () => {
    const newActiveStep = activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    handleChangeStep();
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleChangeStep = () => {
    console.log(getValues());
  };

  const handleComplete = () => {
    handleNext();
    handleChangeStep();
  };

  // end wizard

  useEffect(() => {
    if (jobId) {
      api
        .get(`/jobs/${jobId}`)
        .then((r) => {
          console.log(r.data);
          setActiveSource(r.data.source);
          reset(r.data.parameters);
          setCurrentJob(r.data);
        })
        .catch((e) => {
          console.log(e);
          toast.error('Erro ao recuperar dados do job.');
          navigate('/data-ingestion');
        });
    } else {
      setActiveSource('sgbd');
    }
  }, [jobId]);

  const request = (data, method, url) => {
    setRequesting(true);

    return api({ method, data, url }).finally(() => {
      setRequesting(false);
    });
  };

  const params = {
    source: ['sgbd', 'files', 'sap', 'streaming'],
    status: ['dev', 'prd'],
  };

  const onSubmit = (data) => {
    const newData = {
      parameters: data,
      source: activeSource,
    };

    if (!jobId) {
      insert(newData);
    } else {
      update(newData);
    }
  };

  const onError = (data) => {
    console.log(data);
  };

  const insert = (data) => {
    data.status = 'dev';

    request(data, 'post', '/jobs')
      .then((r) => {
        toast.success('Job inserido.');

        navigate(`/data-ingestion/job/${r.data._id}`);
      })
      .catch((e) => {
        console.log(e);
        toast.error('Erro ao inserir job.');
      });
  };

  const update = (data) => {
    data.status = 'dev';

    request(data, 'put', `/jobs/${jobId}`)
      .then(() => {
        toast.success('Job alterado.');
      })
      .catch((e) => {
        console.log(e);
        toast.error('Erro ao alterar job.');
      });
  };

  return (
    <Page title="Data Ingestion">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Data Ingestion
          </Typography>
        </Stack>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {!jobId ? 'Novo Job' : `Job ${jobId}`}
            </Typography>
            <ButtonGroup
              variant="outlined"
              size="large"
              color="primary"
              aria-label="outlined button group"
              sx={{ mb: '20px' }}
            >
              {params.source.map((item, index) => (
                <Button
                  key={index}
                  title={item}
                  variant={item === activeSource ? 'contained' : 'outlined'}
                  onClick={() => setActiveSource(item)}
                >
                  {item.toUpperCase()}
                </Button>
              ))}
            </ButtonGroup>

            {/* wizard */}
            <Box id="wizard" sx={{ width: '100%' }}>
              <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                  <Step key={label} completed={completed[index]}>
                    <StepButton color="inherit" onClick={handleStep(index)}>
                      {label}
                    </StepButton>
                  </Step>
                ))}
              </Stepper>
              <Box sx={{ mt: '30px' }}>
                {activeStep === 0 && <FirstStep control={control} source={activeSource} />}
                {activeStep === 1 && <SecondStep control={control} source={activeSource} />}
              </Box>
              <div>
                <>
                  {/* <Typography sx={{ mt: 2, mb: 1, py: 1 }}>Step {activeStep + 1}</Typography> */}
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                      size="large"
                    >
                      Anterior
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />
                    {isLastStep() ? (
                      <LoadingButton
                        type="submit"
                        variant="contained"
                        size="large"
                        loading={requesting}
                        onClick={handleSubmit(onSubmit, onError)}
                      >
                        {!jobId ? 'Inserir' : `Alterar`}
                      </LoadingButton>
                    ) : (
                      <Button onClick={handleComplete} size="large">
                        Próximo
                      </Button>
                    )}
                  </Box>
                </>
              </div>
            </Box>
            {/* fim wizard */}
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
}
