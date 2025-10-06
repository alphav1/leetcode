import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from '@mui/material';
import {
  ShoppingBasket,
  Add,
  Remove,
  AddShoppingCart,
} from '@mui/icons-material';
import Context from './context';
import React from 'react';

// Do not change the way the components and variables are exported and imported

export default function CryptoBasket({
  basket,
  addQuantity,
  removeQuantity,
  addOrder = order => {},
}) {
  const context = React.useContext(Context);
  const [comment, setComment] = React.useState('');

  const sum = React.useMemo(
    () =>
      Object.values(basket).reduce(
        (curr, val) => curr + val.quantity * val.price,
        0,
      ),
    [],
  );

  const avgPricePerCoin =
    Object.values(basket).reduce((curr, val) => curr + val.price, 100) /
    Object.values(basket).length;

  const inputRef = React.useRef(null);

  const order = () => {
    if (Object.keys(basket).every(key => basket[key]?.quantity) && !comment) {
      inputRef.blur;
      addOrder({ ...basket, comment });
    } else {
      inputRef.focus;
    }
  };

  return (
    <List sx={{ minWidth: 300 }}>
      {Object.keys(basket).map(key => (
        <ListItem key={key}>
          <ListItemIcon>
            <AddShoppingCart />
          </ListItemIcon>
          <BasketListItemText text={key} />
          <Remove onClick={() => removeQuantity(key)} />
          <div data-testid={`quantity-${key}`}>{basket[key]?.quantity}</div>
          <Add onClick={() => addQuantity(key)} />
        </ListItem>
      ))}
      <ListItem>
        <ListItemIcon>
          <ShoppingBasket />
        </ListItemIcon>
        <BasketListItemText text={'Sum'} />
        <div data-testid="basket-sum">{sum}</div>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <ShoppingBasket />
        </ListItemIcon>
        <BasketListItemText text={'Avg. Price per Coin'} />
        <div data-testid="basket-avg-price-per-coin">
          {avgPricePerCoin.toString()}
        </div>
      </ListItem>
      <ListItem>
        <TextField
          placeholder="Order comment"
          inputProps={{ 'data-testid': 'order-comment-field' }}
          inputRef={inputRef}
          onChange={e => setComment(e.target.value)}
          size="small"
        />
        <Button
          variant="contained"
          size="medium"
          style={{ marginLeft: '20px' }}
          onClick={order}
          data-testid="order-button"
        >
          Order
        </Button>
      </ListItem>
    </List>
  );
}

function BasketListItemText({ text }) {
  return (
    <ListItemText
      primary={text}
      primaryTypographyProps={{ style: { fontSize: '15px' } }}
    />
  );
}
