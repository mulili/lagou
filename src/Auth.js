import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Button } from 'antd-mobile';

import * as action from './actionCreator';

class Auth extends React.Component {
  componentDidMount() {

  }

  render() {
    const { auth, login, getUerData } = this.props;
    return (
      <div>
        <Button type="primary" onClick={getUerData}>Change</Button>
        {auth.isAuth ? <Redirect to="./dashboard" /> : null}
        <h2>
          Name:
          {auth.user}
          &nbsp;&nbsp;
          Age:
          {auth.age}
        </h2>
        <p>你咩有权限，需要登录才能看</p>
        <Button type="primary" onClick={login}>Login</Button>
      </div>
    );
  }
}

Auth.propTypes = {
  auth: PropTypes.shape().isRequired,
  login: PropTypes.func.isRequired,
  getUerData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {
  login: action.login,
  getUerData: action.getUerData
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
