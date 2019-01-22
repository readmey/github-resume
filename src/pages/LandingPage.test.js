import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from './LandingPage.js';

it('should update the state.username on input change', () => {
  const wrapper = shallow(<LandingPage />);
  wrapper.find('#username').simulate('change', {target: { value: 'test' }});
  expect(wrapper.state('username')).toBe('test');
});
