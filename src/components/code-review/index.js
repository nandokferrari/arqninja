import { LoadingButton } from '@mui/lab';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useContext, useState } from 'react';
import { DataContext } from '../../providers/data-ingestion-context';

const CodeReviewDialog = ({ item, isDialogOpen, setIsDialogOpen, fetchData }) => {
  const ctxt = useContext(DataContext);
  const [requesting, setRequesting] = useState(false);

  const handleAccept = async () => {
    setRequesting(true);
    await ctxt.handleCodeReview(item);

    fetchData();

    setRequesting(false);
    setIsDialogOpen(false);
  };

  return (
    <Dialog
      open={isDialogOpen}
      onClose={() => {
        setIsDialogOpen(false);
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Code Review</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Você confirma que fez o <b>Code Review</b> deste job e garante que o mesmo pode entrar para o ambiente de
          produção?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setIsDialogOpen(false);
          }}
          color="error"
        >
          Cancelar
        </Button>
        <LoadingButton onClick={handleAccept} autoFocus loading={requesting} variant="contained">
          Confirmar
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default CodeReviewDialog;
