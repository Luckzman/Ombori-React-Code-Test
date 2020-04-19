import React from 'react';
import UserListPage from './components/UserListPage';
import SplashScreen from './components/SplashScreen';
import useToggleLoading from './components/SplashScreen/useToggleLoading';
import './App.css';

const App = () => {
  const isLoading = useToggleLoading();
  return isLoading ? <SplashScreen /> : <UserListPage />;
};

export default App;
