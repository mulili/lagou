import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import {
  List, Button, InputItem, WingBlank, WhiteSpace, Radio
} from 'antd-mobile';
import Logo from '../../component/logo';

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
    console.log(this.state);
  }

  handleChange=(key, value) => {
    this.setState({
      [key]: value
    });
  }

  render() {
    const { type } = this.state;
    const { RadioItem } = Radio;
    return (
      <div>
        <Logo />
        <WingBlank>
          <List>
            <InputItem type="text" onChange={value => this.handleChange('user', value)}>UserName</InputItem>
            <WhiteSpace />
            <InputItem type="password" onChange={value => this.handleChange('pwd', value)}>Password</InputItem>
            <WhiteSpace />
            <WhiteSpace />
            <InputItem type="password" onChange={value => this.handleChange('confirmPwd', value)}>Confirm</InputItem>
            <WhiteSpace />
            <RadioItem
              checked={type === 'boss'}
              onChange={() => this.handleChange('type', 'boss')}
            >
             Boss
            </RadioItem>
            <WhiteSpace />
            <RadioItem
              checked={type === 'genius'}
              onChange={() => this.handleChange('type', 'boss')}
            >
            Genius
            </RadioItem>
            <WhiteSpace />
            <Button
              type="primary"
              onClick={this.handleLogin}
            >
            Login
            </Button>
            <WhiteSpace />
            <Button
              type="primary"
              onClick={this.handleRegister}
            >
            Register
            </Button>
          </List>
        </WingBlank>

      </div>
    );
  }
}
Register.propTypes = {
  history: PropTypes.shape().isRequired
};
export default withRouter(Register);
