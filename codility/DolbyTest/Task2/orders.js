import {
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React from 'react';
import { LocalShipping } from '@mui/icons-material';
import Context from './context';

// Do not change the way the components and variables are exported and imported

export default function Orders({ orders = [] }) {
  const context = React.useContext(Context);

  return (
    <List sx={{ maxWidth: 400 }} data-testid="orders">
      <ListSubheader>Orders</ListSubheader>
      {orders.map((order, index) => (
        <ListItem key={order.id}>
          {/** * You do not need to change the way orders are displayed; */}
          <ListItemIcon>
            <LocalShipping />
          </ListItemIcon>
          <ListItemText
            primary={`OrderID: ${order.id}, Description: ${order.comment}`}
          />
        </ListItem>
      ))}
    </List>
  );
}
