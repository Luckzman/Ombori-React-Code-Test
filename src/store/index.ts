import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { getAllUserAction } from './action';

const user = (state = { data: [] }, action: getAllUserAction) => {
  switch (action.type) {
    case 'GET_ALL_USERS':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default createStore(user, applyMiddleware(thunk));
