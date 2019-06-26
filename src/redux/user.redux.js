import Const from '../const';
import getRedirectPath from '../util/getRedirectPath';

const initState = {
  msg: '',
  user: '',
  pwd: '',
  type: '',
  isAuth: false,
  redirectTo: ''
};
const user = (state = initState, action) => {
  switch (action.type) {
    case Const.REGISTER_SUCCESS:
      return {
        ...state, msg: '', isAuth: true, ...action.payload, redirectTo: getRedirectPath(action.payload.data)
      };
    case Const.LOGIN_SUCCESS:
      return {
        ...state, msg: '', isAuth: true, ...action.payload, redirectTo: getRedirectPath(action.payload.data)
      };
    case Const.ERROR_MSG:
      return { ...state, msg: action.payload.msg, isAuth: false };
    default:
      return state;
  }
};
export default user;
