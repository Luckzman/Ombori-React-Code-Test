import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import UserListItem from '../UserListItem';
import { getAllUsers } from '../../store/action';
import './UserListPage.scss';

interface User {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
  email: string;
}

const UserListPage: React.FC = () => {
  const users = useSelector((state: { data: [] }) => state, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className="list-page">
      <div className="navbar">
        <div className="container">
          <div className="">
            <h3 className="">User List</h3>
          </div>
        </div>
      </div>
      <div className="container">
        {users.data &&
          users.data.map((user: User) => (
            <UserListItem
              key={user.id}
              avatar={user.avatar}
              firstname={user.first_name}
              lastname={user.last_name}
              email={user.email}
            />
          ))}
      </div>
    </div>
  );
};

export default UserListPage;
