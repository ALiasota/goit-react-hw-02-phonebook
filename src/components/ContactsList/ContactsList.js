import ContactsListItem from '../ContactsListItem';
import propTypes from 'prop-types';

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactsListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={onDelete}
          />
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  onDelete: propTypes.func.isRequired,
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactsList;
