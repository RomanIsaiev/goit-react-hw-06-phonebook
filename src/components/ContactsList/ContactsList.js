import { Contact } from 'components/Contact/Contact';
import { ListWithContacts } from './ContactsList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

const getVisibleContacts = (contacts, nameFilter) => {
  return contacts.filter(item => {
    const hasContact = item.name
      .toLowerCase()
      .includes(nameFilter.toLowerCase());

    return hasContact;
  });
};

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const contactsFilter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, contactsFilter);
  return (
    <ListWithContacts>
      {visibleContacts.map(contact => (
        <Contact data={contact} key={contact.id} />
      ))}
    </ListWithContacts>
  );
};
