import Const from './const';

const name = (nameList = ['muli', 'yuhui', 'xiaoxin'], action) => {
  const initState = Object.assign({}, nameList);
  switch (action.type) {
    case Const.ADD:
      return [...nameList, action.payload];
    case Const.SUBTRACT:
      return [...nameList.slice(0, -1)];
    case Const.RESTORE:
      return initState;
    default:
      return nameList;
  }
};
export default name;
