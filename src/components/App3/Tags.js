import React from 'react';

export default function Tags({ tags, name }) {
  return (
    <div className="tags">
      <strong>Tags: </strong>
      {tags.map((tag, i) =>
        <span key={`tag-${name}-${i}`}>
          {tag}
        </span>
      )}
    </div>
  );
}
