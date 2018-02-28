import React, {Component} from 'react';
import CommentList from './CommentList';
import PropTypes from 'prop-types';

import toogleOpen from '../decorators/toogleOpen';

class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.IsRequired,
      title: PropTypes.string.IsRequired,
      text: PropTypes.string
    })
  }

  render() {
    const {article, isOpen, handleOpen} = this.props;
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={handleOpen}>
          {isOpen ? 'close' : 'open'}
        </button>
        {this.getSection()}
        <CommentList commentIds={article.comments} />
      </div>
    )
  }
  getSection() {
    const {article, isOpen} = this.props;
    return isOpen ? <section>{article.text}</section> : null
  }
}
export default toogleOpen(Article);
