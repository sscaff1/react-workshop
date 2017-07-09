import React from 'react';
import Tags from './Tags';
import { Link } from 'react-router-dom';

export default function Contact({ name, email, phone, tags, withLink }) {
  return (
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
  );
}
