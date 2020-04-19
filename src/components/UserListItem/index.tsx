import React from 'react';
import './UserListItem.scss';

interface P {
  firstname: string;
  lastname: string;
  avatar: string;
  email: string;
}

const UserListItem: React.FC<P> = ({ avatar, firstname, lastname, email }) => (
  <div className="card">
    <img className="user-img" src={avatar} alt="user" />
    <div className="user-info">
      <div className="empty" />
      <div className="user-details">
        <p>
          <strong className="">{`${firstname} ${lastname}`}</strong>
        </p>
        <p>{email}</p>
      </div>
    </div>
  </div>
);

export default UserListItem;
