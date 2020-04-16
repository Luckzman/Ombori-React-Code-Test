import React from 'react';
import './UserListItem.scss';

const UserListItem: React.FC = () => {
  return (
    <div className="list-item">
      <img
        className="user-img"
        src="https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
        alt="user"
      />
      <div className="user-info">
        <p>
          <strong className="">Rosemary Omokarho</strong>
        </p>
        <p>Rosemaryomokarho@gmail.com</p>
      </div>
    </div>
  );
};

export default UserListItem;
