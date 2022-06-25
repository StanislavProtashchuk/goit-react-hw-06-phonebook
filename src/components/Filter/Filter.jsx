import { useSelector, useDispatch } from 'react-redux';
import s from './Filter.module.css';
import { filterContacts } from '../../redux/ContactForm/contactForm-actions';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  return (
    <div>
    <label className={s.label}>
      <p>Find contacts by name</p>
      <input className={s.input}
        type="text"
        value={filter}
        onChange={e => dispatch(filterContacts(e.target.value))}
      />
      </label>
      </div>
  );
};
export default Filter;