import Contact from "../Contact";
const ContactsList = ({contacts, onDelete}) => {
    return(
        <ul>
          {contacts.map(contact =>{              
            return <Contact key={contact.id} contact={contact} onDelete={onDelete}/>
          })}
        </ul>
    )
}

export default ContactsList;