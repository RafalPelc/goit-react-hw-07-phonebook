import { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/createAction';
import { nanoid } from 'nanoid';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleChangeName = event => {
    const value = event.target.value;
    setName(value);
  };

  const handleChangeNumber = event => {
    const value = event.target.value;
    setNumber(value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    dispatch(addContact({ nameText: name, numberText: number }));
    setName('');
    setNumber('');
  };

  const loginNameId = nanoid();
  const loginNumberId = nanoid();

  return (
    <div>
      <form className={css.form} onSubmit={handleFormSubmit}>
        <input
          className={css.input}
          id={loginNameId}
          onChange={handleChangeName}
          value={name}
          type="text"
          name="name"
          placeholder="Name"
          pattern="^[a-zA-Za]+(([' \-][a-zA-Za])?[a-zA-Za]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <input
          className={css.input}
          id={loginNumberId}
          onChange={handleChangeNumber}
          value={number}
          type="tel"
          name="number"
          placeholder="Number"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={css.button_add}>Add contact</button>
      </form>
    </div>
  );
};
