import React from 'react';
import UserListItem from '../UserListItem';
import './UserListPage.scss';

const UserListPage: React.FC = () => {
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
        <UserListItem />
      </div>
    </div>
  );
};

export default UserListPage;
