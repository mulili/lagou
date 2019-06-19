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
      type: 'genius'
    };
  }

  handleLogin=() => {
    const { history } = this.props;
    history.push('/login');
  }

  handleRegister=() => {
    const { history } = this.props;
    history.push('/register');
  }

  render() {
    const { type } = this.state;
    const { RadioItem } = Radio;
    return (
      <div>
        <Logo />
        <WingBlank>
          <List>
            <InputItem type="text">UserName</InputItem>
            <WhiteSpace />
            <InputItem type="password">Password</InputItem>
            <WhiteSpace />
            <WhiteSpace />
            <InputItem type="password">Confirm</InputItem>
            <WhiteSpace />
            <RadioItem
              checked={type === 'boss'}
            >
             Boss
            </RadioItem>
            <WhiteSpace />
            <RadioItem
              checked={type === 'genius'}
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
