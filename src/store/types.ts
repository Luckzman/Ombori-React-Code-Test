import { actionTypes } from './actionTypes';

export interface RootState {
  user: {
    data: [];
    end: boolean;
    loading: boolean;
  };
  pages: {
    page: number;
  };
}


export interface getAllUserAction {
  type: typeof actionTypes.GET_ALL_USERS;
  payload: { data: [] };
  loading: boolean;
}
