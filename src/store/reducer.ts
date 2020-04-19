import { getAllUserAction, actionTypes } from './action';

const user = (state = { data: [], end: false }, action: getAllUserAction) => {
  switch (action.type) {
    case actionTypes.GET_ALL_USERS:
      return {
        ...state,
        data: state.data.concat(action.payload.data),
      };
    case actionTypes.LOAD_MORE_USERS:
      return {
        ...state,
        loading: action.loading,
      };
    case actionTypes.END_OF_LIST:
      return {
        ...state,
        end: true,
      };
    default:
      return state;
  }
};

const pages = (state = { page: 0 }, action: getAllUserAction) => {
  switch (action.type) {
    case actionTypes.ADVANCE_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    default:
      return state;
  }
};

export { user, pages };
