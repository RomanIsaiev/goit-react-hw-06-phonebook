import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const { name, number } = form.elements;
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
