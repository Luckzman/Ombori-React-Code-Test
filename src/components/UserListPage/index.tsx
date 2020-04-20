import React, { useRef } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import Loader from '../Loader';
import UserListItem from '../UserListItem';
import { RootState } from '../../store/types';
import useInfiniteScroll from './useInfinteScroll';
import './UserListPage.scss';

interface User {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
  email: string;
}

const UserListPage: React.FC = () => {
  const end = useSelector((state: RootState) => state.user.end, shallowEqual);
  const users = useSelector((state: RootState) => state.user, shallowEqual);
  const page = useSelector(
    (state: RootState) => state.pages.page,
    shallowEqual
  );

  const scrollRef = useRef(null);

  useInfiniteScroll(scrollRef, page);

  return (
    <div className="list-page">
      <div className="navbar">
        <div className="container">
          <div className="">
            <h3 className="">User List</h3>
          </div>
        </div>
      </div>
      <div className="container grid">
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
      {users.loading && !end && (
        <div className="loader">
          <Loader />
        </div>
      )}
      {end && (
        <div className="loader">
          <h3>No More Users...</h3>
        </div>
      )}
      <div id="page-bottom" ref={scrollRef} />
    </div>
  );
};

export default UserListPage;
