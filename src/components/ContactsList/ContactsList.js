import Contact from "../Contact";
const ContactsList = ({contacts}) => {
    return(
        <ul>
          {contacts.map(contact =>{              
            return <Contact key={contact.id} contact={contact}/>
          })}
        </ul>
    )
}

export default ContactsList;