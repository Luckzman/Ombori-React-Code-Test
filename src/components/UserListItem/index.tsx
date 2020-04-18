import React from 'react';
import './UserListItem.scss';

interface P {
  firstname: string;
  lastname: string;
  avatar: string;
  email: string;
}

const UserListItem: React.FC<P> = ({ avatar, firstname, lastname, email }) => (
  <div className="list-item">
    <img className="user-img" src={avatar} alt="user" />
    <div className="user-info">
      <p>
        <strong className="">{`${firstname} ${lastname}`}</strong>
      </p>
      <p>{email}</p>
    </div>
  </div>
);

export default UserListItem;
