import React from 'react';
import ReactDOM from 'react-dom';
// stylesheet
import './functionBased/App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import TodoContainer from './functionBased/components/TodoContainer';

ReactDOM.render(
  <Router>
    <TodoContainer />
  </Router>,
  document.getElementById('root'),
);
