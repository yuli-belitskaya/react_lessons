import React from 'react';
import ProductCard from "../components/product_card";
import { productPath } from '../routes/routes';

export default {
  name: 'ProductCard',
  exact: true,
  strict: true,
  path: productPath(),
  component: ProductCard,
};
