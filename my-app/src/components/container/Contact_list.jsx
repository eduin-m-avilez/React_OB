
import React from 'react'
import { Contact } from '../../models/contact.class';
import ContactsComponent from '../pure/Contacts'

export default function ContactListComponent() {
    const defaultContact = new Contact('Pedro', 'Ramirez', 'ednnxn@hgvxzsmzn.com', false);
  return (
    <div>
        <h1>Contact</h1>
        <ContactsComponent contact={defaultContact}></ContactsComponent>
    </div>
  )
}
