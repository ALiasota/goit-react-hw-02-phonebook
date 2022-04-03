import React, {Component} from "react";
import { nanoid } from 'nanoid';
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactsList from "./ContactsList";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ],    
    filter: '',
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeFilter = this.onChangeFilter.bind(this);
    
  }
  

  handleSubmit(contact) {  
    
    const newContact = {
           id: nanoid(),
           name: contact.name,
           number: contact.number
         };

    if(this.state.contacts.some(contact => contact.name === newContact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    
     this.setState(({contacts}) => ({
       contacts: [newContact, ...contacts]
     }));       
     
     
  }

  onChangeFilter(e) {
    this.setState({filter: e.target.value});
  }

  getVisibleContacts() {
    const{filter, contacts} = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter));
  }

  deleteCont = (id) => {   
    this.setState(prevState =>
      ({contacts: prevState.contacts.filter(contact =>id !== contact.id)})
      )
  } 
  

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <div className="container">
      <ContactForm onSubmit={this.handleSubmit}/>
      
        <Filter value={this.state.filter} onChange={this.onChangeFilter} />      
        <h1>Contacts</h1>
        <ContactsList contacts={visibleContacts} onDelete={this.deleteCont}/>
      
      </div> 
    );
  }
};

export default App;
