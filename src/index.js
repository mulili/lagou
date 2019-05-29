import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

import * as serviceWorker from './serviceWorker';

import App from './App';
import reducer from './reducer';

import './index.css';


const store = createStore(reducer, applyMiddleware(logger));

const renderDom = () => {
  ReactDOM.render(
    <App
      store={store}
    />,
    document.getElementById('root'),
  );
};
renderDom();
store.subscribe(renderDom);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
