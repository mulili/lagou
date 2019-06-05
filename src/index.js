import React from 'react';
import ReactDOM from 'react-dom';
import {
  createStore, applyMiddleware, compose, combineReducers
} from 'redux';
import { Provider } from 'react-redux';

import {
  BrowserRouter as Router, Route, Switch, Redirect
} from 'react-router-dom';
import thunk from 'redux-thunk';

import name from './Name.redux';
import auth from './Auth.redux';

import Auth from './Auth';
import Dashboard from './Dashboard';


import * as serviceWorker from './serviceWorker';

import './index.css';

const store = createStore(combineReducers({ name, auth }), compose(
  applyMiddleware(thunk),
  /* eslint-disable no-underscore-dangle */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  /* eslint-enable */
));

ReactDOM.render(
  <Provider
    store={store}
  >
    <Router>
      <Switch>
        <Route path="/" exact component={Auth} />
        <Route path="/dashboard" component={Dashboard} />
        <Redirect to="/dashboard" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
