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
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing: [
          ...state.trends,
          ...state.originals,
        ].find((element) => element.id === Number(action.payload)) || [],
      };
    case 'SEARCH_VIDEOS': {
      console.log(action.payload === '');
      if (action.payload === '') {
        return { ...state, search: [] };
      }
      const searchResults = [...new Set([
        ...state.trends,
        ...state.originals,
      ].filter((element) => (
        element.title.toLowerCase().includes(action.payload.toLowerCase())
      )) || [])];
      return {
        ...state,
        search: searchResults,
      };
    }
    default:
      return state;
  };
};

export default reducer;
