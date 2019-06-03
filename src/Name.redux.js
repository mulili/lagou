import Const from './const';

const name = (state = { nameList: ['muli', 'yuhui', 'xiaoxin'] }, action) => {
  const initState = Object.assign({}, state);
  switch (action.type) {
    case Const.ADD:
      return { nameList: [...state.nameList, action.payload] };
    case Const.SUBTRACT:
      return { nameList: [...state.nameList.slice(0, -1)] };
    case Const.RESTORE:
      return initState;
    default:
      return state;
  }
};
export default name;
