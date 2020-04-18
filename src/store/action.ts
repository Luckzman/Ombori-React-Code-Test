import { Action } from 'redux';
import axios from 'axios';
import { ThunkAction } from 'redux-thunk';

type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  [],
  null,
  Action<string>
>;

const actionTypes = {
  GET_ALL_USERS: 'GET_ALL_USERS',
  GET_ALL_USERS_ERROR: 'GET_ALL_USERS_ERROR',
};

export interface getAllUserAction {
  type: typeof actionTypes.GET_ALL_USERS;
  payload: { data: [] };
}

const getAllUsersAction = (payload: { data: [] }) => ({
  type: actionTypes.GET_ALL_USERS,
  payload,
});

const getAllUserActionError = (payload: { data: [] }) => ({
  type: actionTypes.GET_ALL_USERS_ERROR,
  payload,
});

export const getAllUsers = (): AppThunk => {
  return (dispatch): {} => {
    return axios
      .get('https://reqres.in/api/users?page=1')
      .then((response) => {
        dispatch(getAllUsersAction(response.data));
      })
      .catch((error) => {
        if (error.response) {
          dispatch(getAllUserActionError(error.response.message));
        }
      });
  };
};
