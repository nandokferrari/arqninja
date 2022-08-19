import { useContext, useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import {
  Box,
  Button,
  Card,
  Container,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';
// components
import CodeReviewDialog from '../components/code-review';
import Iconify from '../components/Iconify';
import Page from '../components/Page';
import Scrollbar from '../components/Scrollbar';
import JobStatus from '../components/status/job';
import api from '../providers/api';
import { DataContext } from '../providers/data-ingestion-context';
import { DataFilter, MoreMenu, UserListHead } from '../sections/@dashboard/user';
// mock
import USERLIST from '../_mock/user';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'job', label: 'Job', alignRight: false },
  { id: 'source', label: 'Origem', alignRight: false },
  { id: 'actions', label: 'Ações', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: 'actions2', label: '', alignRight: false },
  { id: 'actions3', label: '', alignRight: false },
];

// ----------------------------------------------------------------------

export default function DataIngestion() {
  const [items, setItems] = useState([]);
  const { filterSource, filterStatus } = useContext(DataContext);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentJob, setCurrentJob] = useState(null);

  const filtered = () => {
    const conditions = (item) => filterSource.includes(item.source) && filterStatus.includes(item.status);

    return items.filter(conditions);
  };

  const fetchData = () => {
    api
      .get('/jobs')
      .then((r) => {
        console.log(r.data);
        setItems(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Page title="Data Ingestion">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Data Ingestion
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="/data-ingestion/job"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            Novo Job
          </Button>
        </Stack>
        <Card>
          <DataFilter />
          <Scrollbar>
            <TableContainer>
              <Table>
                <UserListHead headLabel={TABLE_HEAD} rowCount={USERLIST.length} />
                <TableBody>
                  {filtered().map((item, index) => (
                    <TableRow hover key={index} tabIndex={-1} role="checkbox">
                      <TableCell align="left">{item._id}</TableCell>
                      <TableCell align="left">{item.source}</TableCell>
                      <TableCell align="left">
                        <Box
                          sx={{
                            '> *': {
                              marginRight: '5px !important',
                            },
                          }}
                        >
                          <Button size="small" variant="outlined">
                            Edit
                          </Button>
                          <Button size="small" variant="outlined">
                            Stop
                          </Button>
                          <Button size="small" variant="outlined">
                            Composer
                          </Button>
                        </Box>
                      </TableCell>
                      <TableCell align="left">
                        <JobStatus value={item.status} />
                      </TableCell>
                      <TableCell align="center">
                        {item.status === 'dev' ? (
                          <Button
                            size="small"
                            variant="contained"
                            color="error"
                            onClick={() => {
                              setCurrentJob(item);
                              setIsDialogOpen(true);
                            }}
                          >
                            Code Review
                          </Button>
                        ) : (
                          <Button size="small" variant="contained" color="success">
                            Produtizar
                          </Button>
                        )}
                      </TableCell>

                      <TableCell align="right">
                        <MoreMenu item={item} fetchData={fetchData} />
                      </TableCell>
                    </TableRow>
                  ))}
                  {filtered().length === 0 && (
                    <TableRow>
                      <TableCell colSpan={6} sx={{ textAlign: 'center' }}>
                        Nenhum job encontrado.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>
        </Card>
      </Container>
      <CodeReviewDialog
        item={currentJob}
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        fetchData={fetchData}
      />
    </Page>
  );
}
