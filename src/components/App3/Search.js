import React from 'react';

export default function Search({ tags, onTagClick, onChange }) {
  return (
    <div>
      <input type="text" placeholder="Search" onChange={onChange} />
      {tags.map((tag, i) =>
        <div key={`tag-search-${i}`}>
          <input type="checkbox" onChange={onTagClick} value={tag} />
          <label>
            {tag}
          </label>
        </div>
      )}
    </div>
  );
}
