import { useEffect, useMemo, useState } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';

import { nanoid } from 'nanoid';

import { ContactsList } from '../ContactsList/ContactsList';

import { Filter } from '../Filter/Filter';

import { Layout } from './App.styled';
import { GlobalStyle } from 'GlobalStyle';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

// const storageKey = 'contacts';

// const getContacts = () => {
//   const savedContacts = window.localStorage.getItem(storageKey);
//   return savedContacts !== null ? JSON.parse(savedContacts) : [];
// };

export const App = () => {
  // const [contacts, setContacts] = useState(getContacts);
  // const [contactsFilter, setcontactsFilter] = useState('');

  // const handleAddContact = newContact => {
  //   const action = addContact();
  //   dispatch(action);
  //   const contact = {
  //     ...newContact,
  //     id: nanoid(),
  //   };
  //   if (
  //     contacts.find(
  //       item =>
  //         item.name.toLowerCase().trim() ===
  //         newContact.name.toLowerCase().trim()
  //     )
  //   ) {
  //     alert(`${newContact.name} is already in contacts`);
  //     return;
  //   }
  //   setContacts(prevContacts => [...prevContacts, contact]);
  // };

  // const updateContactsFilter = newContanct => {
  //   setcontactsFilter(newContanct);
  // };

  // const deleteContact = contactId => {
  //   setContacts(prevContacts => {
  //     return prevContacts.filter(item => item.id !== contactId);
  //   });
  // };

  // useEffect(() => {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const visibleContacts = useMemo(() => {
  //   return contacts.filter(item => {
  //     const hasContact = item.name
  //       .toLowerCase()
  //       .includes(contactsFilter.toLowerCase());
  //     return hasContact;
  //   });
  // }, [contacts, contactsFilter]);

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <GlobalStyle />
      <ContactsList />
    </Layout>
  );
};

//  <ContactForm onAddContact={addContanct} />;

//  <Filter filter={contactsFilter} onUpdateName={updateContactsFilter} />;

/* <ContactsList contacts={visibleContacts} onDeleteContact={deleteContact} />; */
