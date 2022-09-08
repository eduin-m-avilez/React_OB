import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

function ContactsComponent({ contact }) {
  return (
    <div>
        <h3> Name: { contact.name }</h3>
        <h3> Last Name: { contact.lastName }</h3>
        <h3> Name: { contact.email }</h3>
        <h3> Name: { contact.connected ? 'Online' : 'Disconnected' }</h3>
    </div>
  )
}

ContactsComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ContactsComponent
