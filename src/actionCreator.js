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

const UerData = data => ({
  type: Const.GETUSERDATA,
  payload: data
});

const getUerData = () => (
  (dispatch) => {
    dispatch({ type: 'Start' });
    return axios.get('/data')
      .then((res) => {
        if (res.status === 200) {
          dispatch(UerData(res.data));
        }
      })
      .finally(() => {
        dispatch({ type: 'End' });
      });
  }
);


export {
  addName, subtractName, restore, login, logout, getUerData
};
