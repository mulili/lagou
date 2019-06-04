import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import axios from 'axios';
import { Button } from 'antd-mobile';

import * as action from './actionCreator';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    axios.get('/data').then((res) => {
      if (res.status === 200) {
        console.log(res);
        this.setState({
          data: res.data
        });
      }
    });
  }

  render() {
    const { auth, login } = this.props;
    const { data } = this.state;
    console.log(data);
    return (
      <div>
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
  login: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {
  login: action.login
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
