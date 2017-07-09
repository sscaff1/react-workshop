import React from 'react';
import Tags from '../App3/Tags';
import { Link } from 'react-router-dom';
import contacts from './contacts';

export default function Contact({ match, withLink }) {
  const { email, phone, tags, name } = contacts.filter(
    contact => contact.email === match.params.email
  )[0];
  return (
    <div>
      <div className="contact">
        <div>
          <h3>
            {withLink
              ? <Link to={`/app4/contacts/${email}`}>
                  {name}
                </Link>
              : name}
          </h3>
        </div>
        <div className="details">
          <p>
            <strong>Email: </strong>
            {email}
          </p>
          <p>
            <strong>Phone: </strong>
            {phone}
          </p>
          <Tags tags={tags} name={name} />
        </div>
      </div>
      <Link to={`/app4/contacts`}>&larr; Back to Contacts</Link>
    </div>
  );
}

Contact.defaultProps = {
  withLink: false,
};
