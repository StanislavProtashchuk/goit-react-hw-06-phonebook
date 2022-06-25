import { createAction } from '@reduxjs/toolkit';

import { nanoid } from 'nanoid';

export const addContact = createAction('contactForm/add', (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
});
export const removeContact = createAction('contactForm/delete');
export const filterContacts = createAction('contactForm/filter');