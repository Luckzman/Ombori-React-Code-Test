import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { shallow } from 'enzyme';
import * as Redux from 'react-redux';
import { Action } from 'redux';
import UserListPage from '.';

const intersectionObserverMock = () => ({
  observe: () => null,
});

window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);

const store = {
  user: {
    data: [
      {
        firstname: 'test',
        lastname: 'test',
        email: 'test 2',
        avatar: 'test',
        id: 1,
      },
    ],
    end: false,
    loading: false,
  },
  pages: {
    page: 1,
  },
};

describe('UserListPage', () => {
  let useSelectorSpy: jest.SpyInstance;
  let useDispatchSpy: jest.SpyInstance;

  beforeEach(() => {
    useSelectorSpy = jest.spyOn(Redux, 'useSelector');
    useSelectorSpy.mockReturnValue(store);
    useDispatchSpy = jest.spyOn(Redux, 'useDispatch');
    useDispatchSpy.mockImplementation(() => (cb: Action) => cb);
  });

  it('renders', () => {
    const wrapper = shallow(<UserListPage />);
    expect(wrapper.is(UserListPage));
  });
});
