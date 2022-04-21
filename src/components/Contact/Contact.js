import styles from './Contact.module.css';
import propTypes from 'prop-types';

const Contact = ({contact, onDelete})=>{
    
    return(
        <li className={styles.li}>
            <span>{contact.name}: {contact.number}</span>
            <button
                className={styles.btnDel}
                type="button"
                onClick={()=>onDelete(contact.id)}>        
                Delete
            </button>
        </li>
    )
    
}

Contact.propTypes = {
    onDelete: propTypes.func.isRequired,
    contact: propTypes.shape({
        name: propTypes.string,
        id: propTypes.string,
        number: propTypes.string
    }).isRequired
        
  }

export default Contact;