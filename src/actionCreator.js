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

export {
  addName, subtractName, restore, login, logout
};
