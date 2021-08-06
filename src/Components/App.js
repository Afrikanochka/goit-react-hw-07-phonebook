import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsActions from '../redux/contacts/contactsAction';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';

class App extends Component {
    state = {
        contacts: [],
        items: [],
        filter: ''

      }

      componentDidMount() {
          const newContact = localStorage.getItem('contacts');

          if (newContact) {
              this.props.storageContact(JSON.parse(newContact));
          }
      }

      componentDidUpdate(prevProps, prevState) {
          const { contacts} = this.props;

          if (prevProps.contacts !== contacts) {
              localStorage.setItem('contacts', JSON.stringify(contacts));
          }
      }

    render() {
        return (
            <div className="container">
                <h1>Phonebook</h1>
                <ContactForm/>
                <h2>Contacts</h2>
                <Filter/>
                <ContactList />

            </div>
        );
    }
}

const mapstateToProps = state => ({
    contacts: state.contacts.items,
});

const mapDispatchToProps = {
    storageContact: contactsActions.storageContact,
};

export default connect(mapstateToProps, mapDispatchToProps)(App);