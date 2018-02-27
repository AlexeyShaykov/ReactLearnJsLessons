import React from 'react';


export default function Comment({comment}) {
  const {user, text } = comment;
  return (
    <div>
      <h2>{user}</h2>
      <div>{text}</div>
    </div>
  )
}
