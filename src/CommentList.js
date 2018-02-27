import React, {Component} from 'react';
import {normalizedComments} from './fixtures';
import Comment from './Comment';

export default class CommentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true
    }
  }
  componentWillMount() {
    console.log('componentWillMount ');
  }
  render() {
    const {commentIds} = this.props;
    const comments = commentIds ? commentIds.map(comId => normalizedComments.filter(comm => comm.id === comId)[0]) : null;
    const {isOpen} = this.state;
    return (
      <ul>
        <button onClick={this.handleOpen}>
          {isOpen ? 'hide' : 'open'}
        </button>
        {this.getComments(comments)}
      </ul>
    )
  }
  componentDidMount() {
    console.log('componentDidMount ');
  }
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps ', nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate ', nextState);
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate ', nextState);
  }
  getComments = (comments) => {
    if (!comments) return null;
    const {isOpen} = this.state;
    if (!isOpen) return null;
    return comments.map(comment => <Comment key={comment.id} comment={comment} />);
  }
  handleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
}
