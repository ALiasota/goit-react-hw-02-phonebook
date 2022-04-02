const Contact = ({contact})=>{
    
    return(
        <li>
            <p>{contact.name}:{contact.number}</p>
        </li>
    )
    
}

export default Contact;