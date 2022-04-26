import styles from './ContactsListItem.module.css';
import propTypes from 'prop-types';

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <li className={styles.li}>
      <span>
        {name}: {number}
      </span>
      <button
        className={styles.btnDel}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  onDelete: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
};

export default Contact;
