import React from 'react';

export default function Tweet({ name, username, date, content }) {
  return (
    <div>
      <p>
        {name} @{username} - {date}
      </p>
      <p>{content}</p>
    </div>
  );
}
