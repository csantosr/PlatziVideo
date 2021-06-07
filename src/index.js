import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';

import { Provider } from 'react-redux';

import initialState from '../initialState.json';
import reducer from './reducers';

import App from './routes/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
