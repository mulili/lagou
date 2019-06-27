import axios from 'axios';

import Const from '../const';


const errorMsg = msg => ({
  type: Const.ERROR_MSG,
  payload: {
    msg
  }
});

const login = ({ user, pwd }) => (
  (dispatch) => {
    // 校验表单输入的数据
    if (!user || !pwd) {
      return dispatch(errorMsg('请填写用户名和密码'));
    }
    // 表单校验通过，准备向API发送请求
    dispatch({
      type: Const.LOGIN_PENDING
    });
    return axios.post('/user/login', { user, pwd })
      .then((res) => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch({
            type: Const.LOGIN_SUCCESS,
            payload: res.data
          });
        } else {
          dispatch(errorMsg(res.data.msg));
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(errorMsg(err.msg));
      });
  }
);
const register = ({
  user, pwd, confirmPwd, type
}) => (

  (dispatch) => {
    // 校验表单输入的数据
    if (!user || !pwd || !type) {
      return dispatch(errorMsg('请确保表单填写完整'));
    }
    if (pwd !== confirmPwd) {
      return dispatch(errorMsg('请确保密码输入一致'));
    }
    // 表单校验通过，准备向API发送请求
    dispatch({
      type: Const.REGISTER_PENDING
    });
    const requestBody = { user, pwd, type };
    return axios.post('/user/register', requestBody)
      .then((res) => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch({
            type: Const.REGISTER_SUCCESS,
            payload: res.data
          });
        }
      })
      .catch((err) => {
        dispatch(errorMsg(err.msg));
      });
  }
);

export { register, login };
