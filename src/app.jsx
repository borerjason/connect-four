import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../src/store/app/reducer';
import App from './containers/App/App';

render(
  <Provider store={createStore(reducer)}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
