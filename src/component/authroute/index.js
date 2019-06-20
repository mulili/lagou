import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

class AuthRoute extends Component {
  /*
    是否登陆 ， 当前的 url 地址  login 不需要跳转
    用户的 type 身份 boss or genius
    用户是否完善信息 选择头像 个人简介
  */
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const { history, location } = this.props;
    const publicList = ['/login', '/register'];
    if (publicList.includes(location.pathname)) return;
    axios.get('./user/info')
      .then((res) => {
        if (res.status === 200) {
          if (res.data.code === 0) {
            // 有登录信息
          } else {
            // 没有登录信息
            history.push('./login');
          }
        }
      });
  }

  render() {
    return null;
  }
}
AuthRoute.propTypes = {
  history: PropTypes.shape().isRequired,
  location: PropTypes.shape().isRequired
};

export default withRouter(AuthRoute);
