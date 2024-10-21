import React from 'react';
import css from "./ContactList.module.css";
import Contact from '../Contact/Contact';

import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactSlice';
import { selectNameFilter } from '../../redux/filterSlice';

const ContactList = () => {

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
           <Contact contact={contact} />
        </li>
      ))}
    </ul>
  )
}

export default ContactList