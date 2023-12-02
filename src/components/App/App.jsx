import { ContactForm } from '../ContactForm/ContactForm';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';
import { Layout } from './App.styled';
import { GlobalStyle } from 'GlobalStyle';

export const App = () => {
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
