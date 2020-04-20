import React from 'react';
import { shallow, mount } from 'enzyme';
import UserListItem from '.';

describe('UserListItem', () => {
  it('renders', () => {
    const props = {
      avatar: 'hi',
      firstname: 'test',
      lastname: 'test',
      email: 'test'
    };

    const wrapper = shallow(<UserListItem {...props} />);
    expect(wrapper.is(UserListItem));
  });
});
