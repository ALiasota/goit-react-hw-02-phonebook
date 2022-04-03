import Contact from "../Contact";
import propTypes from 'prop-types';

const ContactsList = ({contacts, onDelete}) => {
    return(
        <ul>
          {contacts.map(contact =>{              
            return <Contact key={contact.id} contact={contact} onDelete={onDelete}/>
          })}
        </ul>
    )
}

ContactsList.propTypes = {
  onDelete: propTypes.func.isRequired,
  contacts: propTypes.arrayOf(
    propTypes.object
  ).isRequired
      
}

export default ContactsList;