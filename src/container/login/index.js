import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import {
  List, InputItem, Button, WingBlank, WhiteSpace
} from 'antd-mobile';


import Logo from '../../component/logo';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleRegister=() => {
    console.log(this.props);
    const { history } = this.props;
    history.push('/register');
  }

  render() {
    return (
      <div>
        <Logo />
        <WingBlank>
          <List />
          <InputItem type="text">用户名</InputItem>
          <WhiteSpace />
          <InputItem type="password">密码</InputItem>
          <WhiteSpace />
          <Button type="primary">登录</Button>
          <WhiteSpace />
          <Button
            type="primary"
            onClick={this.handleRegister}
          >
            注册
          </Button>
        </WingBlank>
      </div>
    );
  }
}
Login.propTypes = {
  history: PropTypes.shape().isRequired
};

export default withRouter(Login);
