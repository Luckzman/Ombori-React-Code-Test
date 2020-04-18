import React, { useEffect, useRef, useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import UserListItem from '../UserListItem';
import { getAllUsers, pageDispatch } from '../../store/action';
import './UserListPage.scss';

interface User {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
  email: string;
}

interface State {
  user: {
    data: [];
    end: boolean;
  };
  pages: {
    page: number;
  };
}

const UserListPage: React.FC = () => {
  const end = useSelector((state: State) => state.user.end, shallowEqual);
  const users = useSelector((state: State) => state.user, shallowEqual);
  const page = useSelector((state: State) => state.pages.page, shallowEqual);
  const dispatch = useDispatch();

  const bottomBoundaryRef = useRef(null);

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
    if (bottomBoundaryRef.current) {
      scrollObserver(bottomBoundaryRef.current);
    }
  }, [scrollObserver, bottomBoundaryRef]);

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
          users.data.map((user: User, i) => (
            <UserListItem
              key={user.id}
              avatar={user.avatar}
              firstname={user.first_name}
              lastname={user.last_name}
              email={user.email}
            />
          ))}
        {end && <h1>End of file...</h1>}
        <div
          id="page-bottom-boundary"
          style={{ border: '1px solid red' }}
          ref={bottomBoundaryRef}
        />
      </div>
    </div>
  );
};

export default UserListPage;
