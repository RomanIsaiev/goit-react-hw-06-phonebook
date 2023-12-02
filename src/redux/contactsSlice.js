import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    contactsFilter: '',
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name: name,
            number: number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
    contactsFilter(state, action) {
      state.contactsFilter = action.payload;
    },
  },
});

export const { addContact, deleteContact, contactsFilter } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// const initialState = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   contactsFilter: '',
// };

// export const addContact = createAction(
//   'contacts/addContact',
//   (name, number) => {
//     return {
//       payload: {
//         id: nanoid(),
//         name: name,
//         number: number,
//       },
//     };
//   }
// );

// export const deleteContact = createAction('contacts/deleteContact');

// export const contactsFilter = createAction('filter/contactName');

// export const contactsReducer = createReducer(initialState, {
//   [addContact]: (state, action) => {
//     state.contacts.push(action.payload);
//   },
//   [deleteContact]: (state, action) => {
//     const index = state.contacts.findIndex(
//       contact => contact.id === action.payload
//     );
//     state.contacts.splice(index, 1);
//   },
//   [contactsFilter]: (state, action) => {
//     state.contactsFilter = action.payload;
//   },
// });
