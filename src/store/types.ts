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
