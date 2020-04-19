import React, { useEffect, useRef, useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader';
import UserListItem from '../UserListItem';
import { RootState } from '../../store/types';
import { getAllUsers, pageDispatch } from '../../store/action';
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
  const dispatch = useDispatch();

  const scrollRef = useRef(null);

  useEffect(() => {
    if (page > 0) {
      dispatch(getAllUsers(page));
    }
  }, [dispatch, page]);

  const scrollObserver = useCallback(
    (node) => {
      new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.intersectionRatio > 0) {
            dispatch(pageDispatch());
          }
        });
      }).observe(node);
    },
    [dispatch]
  );

  useEffect(() => {
    if (scrollRef.current) {
      scrollObserver(scrollRef.current);
    }
  }, [scrollObserver, scrollRef]);

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
        {users.loading && !end && (
          <div className="loader">
            <Loader />
          </div>
        )}
        {end && (
          <div className="loader">
            <h1>End of file...</h1>
          </div>
        )}
        <div id="page-bottom" ref={scrollRef} />
      </div>
    </div>
  );
};

export default UserListPage;
