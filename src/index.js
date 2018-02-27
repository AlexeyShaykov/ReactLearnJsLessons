import React from 'react';
import {render} from 'react-dom';
import ArticleList from './ArticleList';
import {normalizedArticles} from './fixtures';

// function HelloWorld() {
//   return <h1>Hello World</h1>
// };

render(<ArticleList articles={normalizedArticles} />, document.getElementById('container'));
