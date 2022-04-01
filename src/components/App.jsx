import React, {Component} from "react";
import { nanoid } from 'nanoid';

class App extends Component {
  constructor() {
    super();
    this.state = {
    contacts: [],
    name: '',
    number: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  

  handleSubmit = e => {
    e.preventDefault();
     this.setState(prevState => {      
       contacts : prevState.contacts.push({
         id: nanoid(),
         name: e.target.name.value,
         number: e.target.number.value
       })       
     });
     this.setState({
       name: '',
      number: '',})
     
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <h1>Phonebook</h1>
        <label>
        Name
          <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          />
        </label> 
        <label>
        Number
          <input
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          />
        </label> 
        <button
        type="submit">        
          Add contact
        </button>
      </form>
      <div>
        <h1>Contacts</h1>
        <ul>
          {this.state.contacts.map(contact =>{            
            return(              
              <li key={contact.id}>
                <p>{contact.name}:{contact.number}</p>
              </li>
            )
          })}
        </ul>
      </div>
      </> 
    );
  }
};

export default App;
