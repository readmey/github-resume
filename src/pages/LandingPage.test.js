import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import LandingPage from './LandingPage.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LandingPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should update the state.username on input change', () => {
  const wrapper = shallow(<LandingPage />);
  wrapper.find('#username').simulate('change', {target: { value: 'test' }});
  expect(wrapper.state('username')).toBe('test');
});

it('renders error text "username required" when submit form with empty username', () => {
  const wrapper = shallow(<LandingPage />);
  wrapper.find('.form__input--submit').simulate('click', {preventDefault: () => {}});
  expect(wrapper.exists('.input__validation--error')).toEqual(true)
})

it('should update the state.validationError when submit form with empty username', () => {
  const wrapper = shallow(<LandingPage />);
  wrapper.find('#username').simulate('change', { target: { value: ' ' }});
  wrapper.find('.form__input--submit').simulate('click', {preventDefault: () => {}});
  expect(wrapper.state('validationError')).toBe(true)
})