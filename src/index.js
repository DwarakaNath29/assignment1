import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';

import Root from './Root';
import App from './Components/App/App'
import './index.scss';

ReactDOM.render(
  <Root>
    <App/>
  </Root>,
  document.getElementById('root')
);
