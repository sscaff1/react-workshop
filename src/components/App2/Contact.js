import React from 'react';

export default function Contact({ name, email, phone, tags }) {
  return (
    <div className="contact">
      <div>
        <h3>
          {name}
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
        <div className="tags">
          <strong>Tags: </strong>
          {tags.map((tag, i) =>
            <span key={`tag-${name}-${i}`}>
              {tag}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
