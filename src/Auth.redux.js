
import Const from './const';

const auth = (initState = { isAuth: false, user: 'muli' }, action) => {
  switch (action.type) {
    case Const.LOGIN:
      return { ...initState, isAuth: true };
    case Const.LOGOUT:
      return { ...initState, isAuth: false };
    default:
      return initState;
  }
};

export default auth;
