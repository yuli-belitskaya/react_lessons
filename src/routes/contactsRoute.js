import React from 'react';
import Contacts from '../contacts/contacts';
import { contactsPath } from '../routes/routes';

export default {
  name: 'Contacts',
  exact: true,
  strict: true,
  path: contactsPath(),
  component: Contacts,
};