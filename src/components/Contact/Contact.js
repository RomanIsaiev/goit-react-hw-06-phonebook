import { useDispatch, useSelector } from 'react-redux';
import {
  ContactItem,
  ContactItemContainer,
  DeleteButton,
} from './Contact.styled';
import { deleteContact } from 'redux/contactsSlice';
import { getFilter } from 'redux/selectors';

export const Contact = ({ data: { name, number, id } }) => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

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
