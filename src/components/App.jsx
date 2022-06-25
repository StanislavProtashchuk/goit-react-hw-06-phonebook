import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter/Filter';


export const App = () => {
  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm />
      <Filter />
      <h2>Contacts</h2>
      <ContactList />
    </div>
  );
};