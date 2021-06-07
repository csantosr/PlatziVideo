const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE': {
      const exists = state.myList.find((element) => element.id === action.payload.id);
      if (exists) {
        return { ...state };
      }
      return {
        ...state,
        myList: [
          ...state.myList,
          action.payload,
        ],
      };
    }
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter((element) => element.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  };
};

export default reducer;
