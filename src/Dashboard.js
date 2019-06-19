import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  BrowserRouter, Route, Link, Switch, Redirect
} from 'react-router-dom';
import { Button } from 'antd-mobile';

import * as action from './actionCreator';
import App from './App';

const App1 = () => <h2>App1</h2>;
const App2 = () => <h2>App2</h2>;
const Dashboard = (props) => {
  const { match, auth, logout } = props;
  const dashboard = (
    <BrowserRouter>
      <React.Fragment>
        <Button type="warning" onClick={logout}>Logout</Button>
        <ul>
          <li>
            <Link to={`${match.path}/app`}>App</Link>
          </li>
          <li>
            <Link to={`${match.path}/app1`}>App1</Link>
          </li>
          <li>
            <Link to={`${match.path}/app2`}>App2</Link>
          </li>
        </ul>
        <Switch>
          <Route path={`${match.path}/app`} component={App} />
          <Route path={`${match.path}/app1`} component={App1} />
          <Route path={`${match.path}/app2`} component={App2} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
  return auth.isAuth ? dashboard : <Redirect to="/" />;
};

Dashboard.propTypes = {
  match: PropTypes.shape().isRequired,
  auth: PropTypes.shape().isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {
  logout: action.logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
