import { Action } from 'redux';
import axios from 'axios';
import { ThunkAction } from 'redux-thunk';

type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  [],
  null,
  Action<string>
>;

export const actionTypes = {
  GET_ALL_USERS: 'GET_ALL_USERS',
  GET_ALL_USERS_ERROR: 'GET_ALL_USERS_ERROR',
  LOAD_MORE_USERS: 'LOAD_MORE_USERS',
  ADVANCE_PAGE: 'ADVANCE_PAGE',
  END_OF_LIST: 'END_OF_LIST',
};

export interface getAllUserAction {
  type: typeof actionTypes.GET_ALL_USERS;
  payload: { data: [] };
  loading: boolean;
}

const getAllUsersAction = (payload: { data: [] }) => ({
  type: actionTypes.GET_ALL_USERS,
  payload,
});

const loadMoreUsers = (loading: boolean) => ({
  type: actionTypes.LOAD_MORE_USERS,
  loading,
});

export const pageDispatch = (): AppThunk => (dispatch) => {
  dispatch({ type: actionTypes.ADVANCE_PAGE });
};

const endOfList = () => ({
  type: actionTypes.END_OF_LIST,
});

export const getAllUsers = (page: number): AppThunk => {
  return (dispatch): {} => {
    const itemPerPage = 6;
    dispatch(loadMoreUsers(true));
    return axios
      .get(`https://reqres.in/api/users?page=${page}&per_page=${itemPerPage}`)
      .then((response) => {
        if (itemPerPage * page === response.data.total) {
          dispatch(endOfList());
        }
        dispatch(getAllUsersAction(response.data));
        dispatch(loadMoreUsers(false));
      })
      .catch((error) => {
        if (error.response) {
          dispatch(loadMoreUsers(false));
        }
      });
  };
};
