import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const { name, number } = form.elements;

    if (
      contacts.find(
        item =>
          item.name.toLowerCase().trim() === name.value.toLowerCase().trim()
      )
    ) {
      alert(`${name.value} is already in contacts`);
      return;
    }

    dispatch(addContact(name.value, number.value));
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter name" />
        <input type="tel" name="number" placeholder="Enter number" />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};
