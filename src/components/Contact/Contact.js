const Contact = ({contact, onDelete})=>{
    
    return(
        <li>
            <p>{contact.name}:{contact.number}</p>
            <button
                type="button"
                onClick={()=>onDelete(contact.id)}>        
                Delete
            </button>
        </li>
    )
    
}

export default Contact;