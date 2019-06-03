import React from 'react';
import ReactDOM from 'react-dom';
import {
  createStore, applyMiddleware, compose, combineReducers
} from 'redux';
import { Provider } from 'react-redux';

import {
  BrowserRouter, Route, Link, Switch, Redirect
} from 'react-router-dom';
import thunk from 'redux-thunk';

import name from './Name.redux';
import auth from './Auth.redux';
// import Auth from './Auth';
import Login from './Login';
import Dashboard from './Dashboard';


import * as serviceWorker from './serviceWorker';

import './index.css';

const store = createStore(combineReducers({ name, auth }), compose(
  /* eslint-disable no-underscore-dangle */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  /* eslint-enable */
  applyMiddleware(thunk),
));

ReactDOM.render(
  <Provider
    store={store}
  >
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Redirect to="/dashboard" />
      </Switch>

    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
