const reducer = (state = { nameList: ['muli', 'yuhui', 'xiaoxin'] }, action) => {
  const initState = Object.assign({}, state);
  switch (action.type) {
    case 'Add':
      return { nameList: [...state.nameList, action.payload] };
    case 'Subtract':
      return { nameList: [...state.nameList.slice(0, -1)] };
    case 'Restore':
      return initState;
    default:
      return state;
  }
};
export default reducer;
