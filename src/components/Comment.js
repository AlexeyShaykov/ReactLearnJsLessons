import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({comment}) => {
  const {user, text } = comment;
  return (
    <div>
      <h2>{user}</h2>
      <div>{text}</div>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    user: PropTypes.string.IsRequired,
    text: PropTypes.string.IsRequired
  })
}

export default Comment
