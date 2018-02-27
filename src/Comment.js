import React, {Component} from 'react';
import {normalizedComments} from './fixtures';

export default class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true
    }
  }
    render() {
      const {commentIds} = this.props;
      console.log(commentIds);
      const comments = commentIds ? commentIds.map(comId => normalizedComments.filter(comm => comm.id === comId)) : null;
      console.log(comments);
      return (
        <ul>
          {this.getComments(comments)}
        </ul>
      )
    }
    getComments(comments) {
      if (!comments) return null;
      comments.map(comment => console.log(comment));
      return comments.map(comment => <li key={comment[0].id}>{comment[0].text}</li>);
    }
}
