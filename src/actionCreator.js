import axios from 'axios';

import Const from './const';

const addName = () => ({
  type: 'ADD',
  payload: `xiaoMing${Math.random()}`
});

const subtractName = () => ({
  type: 'SUBTRACT'
});

const restore = () => ({
  type: 'RESTORE'
});


const login = () => ({
  type: Const.LOGIN
});

const logout = () => ({
  type: Const.LOGOUT
});

const getUerData = () => (
  (dispatch) => {
    dispatch({
      type: Const.GETUSERDATA_PENDING
    });
    return axios.get('/data')
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: Const.GETUSERDATA_SUCCESS,
            payload: res.data
          });
        }
      })
      .catch(() => {
        dispatch({
          type: Const.GETUSERDATA_FAILED
        });
      });
  }
);


export {
  addName, subtractName, restore, login, logout, getUerData
};
