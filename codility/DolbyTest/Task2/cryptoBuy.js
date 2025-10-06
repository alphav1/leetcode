import CryptoDetails from './cryptoDetails';
import CryptoBasket from './cryptoBasket';
import CryptoTable from './cryptoTable';
import React from 'react';
import axios from 'axios';

export const API_URL_PAGE = 'https://example.com/api/cryptos?page=';
export const API_URL_CLOSE_EVENT =
  'https://example.com/api/cryptos?close_event=';

// Do not change the way the components and variables are exported and imported

export default function CryptoBuy() {
  const [open, setOpen] = React.useState(false);
  const [response, setResponse] = React.useState();
  const [page, setPage] = React.useState(0);
  const [openedCurrency, setOpenedCurrency] = React.useState();
  const [basket, setBasket] = React.useState({});
  const [closeError, setCloseError] = React.useState(false);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get(API_URL_PAGE + page);
    setResponse(response);
  };

  const handleBuy = currency => {
    setBasket({
      ...basket,
      [currency.name]: { quantity: 1, price: currency.price },
    });
    console.log(basket);
  };

  const handleOpen = currency => {
    setOpenedCurrency(currency);
    setOpen(true);
  };

  const handleClose = currency => {
    axios
      .post(API_URL_CLOSE_EVENT + currency.id)
      .then(() => {
        setOpenedCurrency(null);
        setOpen(false);
        setCloseError(false);
      })
      .catch(() => {
        setOpen(false);
      });
  };

  const addQuantity = name => {
    const addedTo = basket[name];
    setBasket({
      ...basket,
      [name]: { ...addedTo, quantity: addedTo.quantity + 1 },
    });
  };

  const removeQuantity = name => {
    const removedFrom = basket[name];
    setBasket({
      ...basket,
      [name]: { ...removedFrom, quantity: removedFrom.quantity - 1 },
    });
  };

  const handlePageChange = newPage => {
    setPage(newPage);
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}
      >
        <div>
          {closeError && <div>Try again</div>}
          <CryptoTable
            data={response?.data}
            page={page}
            handleBuy={handleBuy}
            handlePageChange={handlePageChange}
            handleOpen={handleOpen}
          />
        </div>
        <CryptoBasket
          basket={basket}
          removeQuantity={removeQuantity}
          addQuantity={addQuantity}
        />
      </div>
      <CryptoDetails
        open={open}
        handleClose={() => handleClose(openedCurrency)}
        currency={openedCurrency}
      />
    </>
  );
}
