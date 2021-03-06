import React from 'react';
import Contact from './Contact';

const CONTACTS = [
  {
    name: 'Camden Breitenberg',
    email: 'Wilbert.Pagac@yahoo.com',
    phone: '419.487.4757 x770',
    tags: ['business', 'favorite'],
  },
  {
    name: 'Wendell Koss',
    email: 'Keaton39@gmail.com',
    phone: '1-191-452-3291 x0304',
    tags: ['family', 'business'],
  },
  {
    name: 'Randall Gusikowski',
    email: 'Zechariah70@yahoo.com',
    phone: '948.312.1478 x2169',
    tags: ['friend', 'favorite'],
  },
  {
    name: 'Geovany Farrell',
    email: 'Orval.Denesik98@hotmail.com',
    phone: '1-472-883-7438',
    tags: ['friend'],
  },
  {
    name: 'Abe Jakubowski',
    email: 'Mauricio.Okuneva5@yahoo.com',
    phone: '1-578-864-2360',
    tags: ['family'],
  },
];

const getContacts = favorites => {
  if (favorites) {
    return CONTACTS.filter((contact, i) => contact.tags.includes('favorite'));
  }
  return CONTACTS;
};

export default function ContactList({ favorites }) {
  const contacts = getContacts(favorites);
  return (
    <div>
      {contacts.map((contact, i) =>
        <Contact key={`contact-${i}`} {...contact} />
      )}
    </div>
  );
}
