import React from 'react';
import Section from './section/section';
import ContactForm from './contactForm/contactForm';
import ContactList from './contactList/contactList';
import { List } from './App.styled';
import Filter from './filter/filter';
import shortid from 'shortid';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    filter: '',
  };

  addContactItem = newItem => {
    const contact = {
      id: shortid.generate(),
      name: newItem.name,
      number: newItem.number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  onFilter = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContacts = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(prev => prev.id !== id),
    }));
  };

  componentDidMount() {
    if (localStorage.getItem('contacts')) {
      const cont = JSON.parse(localStorage.getItem('contacts'));
      this.setState({ contacts: cont });
    } else {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const normalizeFilter = this.state.filter.toLowerCase();
    const filterCurrentName = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
    return (
      <>
        <Section title="Phonebook">
          <ContactForm
            onAdd={this.addContactItem}
            filterContact={filterCurrentName}
          />
        </Section>
        {this.state.contacts.length === 0 ? (
          'No contacts yet'
        ) : (
          <Section title="Contacts">
            <Filter filterString={this.state.filter} onChange={this.onFilter} />
            <List>
              <ContactList
                contList={filterCurrentName}
                delete={this.deleteContacts}
              />
            </List>
          </Section>
        )}
      </>
    );
  }
}

export default App;
