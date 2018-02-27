import React, {Component} from 'react';
import Comment from './Comment';

export default class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true
    }
  }
  propTypes: {
    article: React.propTypes.object.IsRequired;
  }

  render() {
    const {article} = this.props;
    const {isOpen} = this.state;
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={this.handleOpen}>
          {isOpen ? 'close' : 'open'}
        </button>
        {this.getSection()}
        <Comment commentIds={article.comments} />
      </div>
    )
  }

  handleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  getSection() {
    const {article} = this.props;
    return this.state.isOpen ? <section>{article.text}</section> : null
  }
}



// export default function Article(props) {
//   const {comment} = props;
//   return (
//     <div>
//       <h3>{comment.user}</h3>
//       <section>{comment.text}</section>
//     </div>
//   )
// }
