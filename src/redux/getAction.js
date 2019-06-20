import axios from 'axios';

import Const from '../const';


export const errorMsg = msg => ({
  type: Const.ERROR_MSG,
  payload: {
    msg
  }
});


export const register = req => (
  // 表单数据校验
  (dispatch) => {
    const {
      user, pwd, confirmPwd, type
    } = req;
    if (!user || !pwd || !type) {
      return dispatch(errorMsg('请确保表单填写完整'));
    }
    if (pwd !== confirmPwd) {
      return dispatch(errorMsg('请确保密码输入一致'));
    }
    return axios.post('/user/register', req)
      .then((res) => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch({
            type: Const.REGISTER_SUCCESS,
            payload: res.data
          });
        } else {
          dispatch(errorMsg(res.data.msg));
        }
      });
  }
);
