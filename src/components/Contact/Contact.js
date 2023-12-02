import { useDispatch } from 'react-redux';
import {
  ContactItem,
  ContactItemContainer,
  DeleteButton,
} from './Contact.styled';
import { deleteContact } from 'redux/contactsSlice';

export const Contact = ({ data: { name, number, id } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ContactItem key={id}>
      <ContactItemContainer>
        {name}: {number}
      </ContactItemContainer>
      <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
    </ContactItem>
  );
};
