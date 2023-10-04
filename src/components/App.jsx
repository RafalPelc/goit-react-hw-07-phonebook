import React, { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../redux/selectors';
import { addContact, delContact, fetchContacts } from '../redux/createAction';
import css from './App.module.css';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSubmit = e => {
    const name = e.name;
    const number = e.number;

    const existingContact = contacts.find(
      c => c.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact({ nameText: name, numberText: number }));
    }
  };

  const handleDelete = contactId => {
    dispatch(delContact(contactId));
  };

  const getFilteredContacts = () => {
    const filterContactsList = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
    return filterContactsList;
  };

  return (
    <section>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <h2> Contacts </h2>
      <Filter />
      <ContactList
        contacts={getFilteredContacts()}
        handleDelete={handleDelete}
      />
    </section>
  );
};
