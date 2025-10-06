import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';
import React from 'react';
import axios from 'axios';

export const API_URL_DETAILS = 'https://example.com/api/cryptos?id=';

// Do not change the way the components and variables are exported and imported

export default function CryptoDetails({ open, handleClose, currency }) {
  const [response, setResponse] = React.useState();

  React.useEffect(() => {
    if (currency?.id) {
      getData();
    }
  }, []);

  const getData = async () => {
    const response = await axios.get(API_URL_DETAILS + currency.id);
    setResponse(response.data);
  };

  return (
    <Dialog open={open} maxWidth="sm">
      <DialogTitle>{currency?.name}</DialogTitle>
      <DialogContent>
        <DialogContentText>{currency?.description}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
