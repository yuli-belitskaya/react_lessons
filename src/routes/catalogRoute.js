import React from 'react';
import Catalog from '../components/catalog';
import { catalogPath } from '../routes/routes';

export default {
  name: 'Catalog',
  exact: true,
  strict: true,
  path: catalogPath(),
  component: Catalog,
};
