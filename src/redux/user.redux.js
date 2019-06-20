import Const from '../const';

const initState = {
  msg: '',
  user: '',
  pwd: '',
  type: '',
  isAuth: false
};
const user = (state = initState, action) => {
  switch (action.type) {
    case Const.REGISTER_SUCCESS:
      return {
        ...state, msg: '', isAuth: true, ...action.payload
      };
    case Const.ERROR_MSG:
      return { ...state, msg: action.payload.msg, isAuth: false };
    default:
      return state;
  }
};
export default user;
