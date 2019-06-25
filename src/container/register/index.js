import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

import {
  List, Button, InputItem, WingBlank, WhiteSpace, Radio
} from 'antd-mobile';
import Logo from '../../component/logo';
import { register } from '../../redux/getAction';
import './index.less';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pwd: '',
      confirmPwd: '',
      type: 'genius'
    };
  }

  handleLogin=() => {
    const { history } = this.props;
    history.push('/login');
  }

  handleRegister=() => {
    /* eslint-disable no-shadow */
    const { register } = this.props;
    /* eslint-enable no-shadow */
    register(this.state);
  }

  handleChange=(key, value) => {
    this.setState({
      [key]: value
    });
  }

  render() {
    const { type } = this.state;
    const { user } = this.props;
    const { RadioItem } = Radio;
    return (
      <div>
        <Logo />
        <WingBlank>
          <List>
            {user.redirectTo ? <Redirect to={user.redirectTo} /> : null}
            {user.msg ? <p className="err-msg">{user.msg}</p> : null}
            <InputItem type="text" onChange={value => this.handleChange('user', value)}>用户名</InputItem>
            <WhiteSpace />
            <InputItem type="password" onChange={value => this.handleChange('pwd', value)}>密码</InputItem>
            <WhiteSpace />
            <WhiteSpace />
            <InputItem type="password" onChange={value => this.handleChange('confirmPwd', value)}>确认密码</InputItem>
            <WhiteSpace />
            <RadioItem
              checked={type === 'boss'}
              onChange={() => this.handleChange('type', 'boss')}
            >
             招聘
            </RadioItem>
            <WhiteSpace />
            <RadioItem
              checked={type === 'genius'}
              onChange={() => this.handleChange('type', 'boss')}
            >
            求职
            </RadioItem>

            <WhiteSpace />
            <Button
              type="primary"
              onClick={this.handleRegister}
            >
            注册
            </Button>
            <WhiteSpace />
            <Button
              type="primary"
              onClick={this.handleLogin}
            >
            登录
            </Button>
          </List>
        </WingBlank>

      </div>
    );
  }
}
Register.propTypes = {
  history: PropTypes.shape().isRequired,
  register: PropTypes.func.isRequired,
  user: PropTypes.shape().isRequired
};
const mapStateToProps = state => ({
  user: state.user
});
const mapDispatchToProps = { register };
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));
