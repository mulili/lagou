import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Button } from 'antd-mobile';

import * as action from './actionCreator';

const Login = (props) => {
  const { auth, login } = props;
  console.log(props);
  return (
    <div>
      {auth.isAuth ? <Redirect to="./dashboard" /> : null}
      <h2>你咩有权限，需要登录才能看</h2>
      <Button type="primary" onClick={login}>Login</Button>
    </div>
  );
};

Login.propTypes = {
  auth: PropTypes.shape().isRequired,
  login: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {
  login: action.login
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
