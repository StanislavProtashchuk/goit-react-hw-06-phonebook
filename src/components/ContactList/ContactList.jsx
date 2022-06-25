import { useDispatch, useSelector } from 'react-redux';
import s from './ContactList.module.css';
import { removeContact } from '../../redux/ContactForm/contactForm-actions';

const ContactList = () => {
  const filter = useSelector(state => state.contacts.filter).toLowerCase();
  const items = useSelector(state => state.contacts.items);
  const contacts = items.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );
  const dispatch = useDispatch();
  return (
    <div>
      {contacts.map(contact => {
        return (
          <li key={contact.id} className={s.list}>
            {contact.name}: {contact.number}
            <button
              key={contact.id}
              name={contact.name}
              className={s.button}
              type="button"
              onClick={() => dispatch(removeContact(contact.id))}
            >
              Delete
            </button>
            </li>
        );
      })}
    </div>
  );
};
export default ContactList;