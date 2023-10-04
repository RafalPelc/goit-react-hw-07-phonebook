import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, handleDelete }) => (
  <ul className={css.list_contact}>
    {contacts.map((contact, id) => (
      <li key={id} className={css.item_contact}>
        <p className={css.name_contact}>
          {contact.name} {contact.number}
        </p>
        <button
          className={css.button_delete}
          type="button"
          onClick={() => handleDelete(contact.id)}
        >
          {' '}
          Delete{' '}
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
