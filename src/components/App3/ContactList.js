import React from 'react';
import Contact from './Contact';

export default function ContactList({ contacts, withLink }) {
  return (
    <div>
      {contacts.map((contact, i) =>
        <Contact key={`contact-${i}`} {...contact} withLink={withLink} />
      )}
    </div>
  );
}
