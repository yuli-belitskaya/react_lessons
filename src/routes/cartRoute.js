import React from 'react';
import Cart from '../components/cart';
import { cartPath } from '../routes/routes';

export default {
  name: 'Cart',
  exact: true,
  strict: true,
  path: cartPath(),
  component: Cart,
};