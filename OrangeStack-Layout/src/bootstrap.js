import App from './containers/Main';
import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyle } from './core/assets/styles/global'

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);
