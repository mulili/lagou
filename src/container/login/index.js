import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

import {
  List, InputItem, Button, WingBlank, WhiteSpace
} from 'antd-mobile';

import { login } from '../../redux/getAction';

import Logo from '../../component/logo';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /* eslint-disable */
      user: '',
      pwd: ''
      /* eslint-enable */
    };
  }


  handleChange=(v, key) => {
    this.setState({
      [key]: v
    });
  }

handleRegister=() => {
  const { history } = this.props;
  history.push('/register');
}

handleLogin=() => {
  /* eslint-disable */
   const { login } = this.props;
   /* eslint-enable */
  login(this.state);
}

render() {
  const { user } = this.props;
  return (
    <div>
      <Logo />
      <WingBlank>
        <List />
        {user.redirectTo ? <Redirect to={user.redirectTo} /> : null}
        {user.msg ? <p className="err-msg">{user.msg}</p> : null}
        <InputItem
          type="text"
          onChange={v => this.handleChange(v, 'user')}
        >
            用户名
        </InputItem>
        <WhiteSpace />
        <InputItem
          type="password"
          onChange={v => this.handleChange(v, 'pwd')}
        >
            密码
        </InputItem>
        <WhiteSpace />
        <Button
          type="primary"
          onClick={this.handleLogin}
        >
          登录
        </Button>
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
  history: PropTypes.shape().isRequired,
  login: PropTypes.func.isRequired,
  user: PropTypes.shape().isRequired
};
const mapStateToProps = state => ({ user: state.user });
const mapDispatchToProps = { login };
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
