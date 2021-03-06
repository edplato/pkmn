import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles.css';
import App from './components/App.jsx';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);