import React from 'react';
import ContactList from '../components/App2/ContactList';

export default function App2() {
  return (
    <div>
      <h2>All Contacts</h2>
      <ContactList />
      <h2>Favorite Contacts</h2>
      <ContactList favorites />
    </div>
  );
}
