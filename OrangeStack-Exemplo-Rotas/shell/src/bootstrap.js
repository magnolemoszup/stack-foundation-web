import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { GlobalStyle } from './core/assets/styles/global'

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.querySelector('#root')
)