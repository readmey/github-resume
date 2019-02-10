import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import LandingPage from './LandingPage.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LandingPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should update the state.username on input change', () => {
  const wrapper = mount(<LandingPage />);
  const input =  wrapper.find('#username');
  input.find('#username').simulate('change', {target: { value: 'test' }});
  expect(wrapper.state('username')).toBe('test');
});

it('should update the state.validationError when submit form with empty username', () => {
  const wrapper = mount(<LandingPage />);
  const input =  wrapper.find('#username');
  const submit = wrapper.find('.form__input--submit');
  input.find('#username').simulate('change', { target: { value: ' ' }});
  submit.find('.form__input--submit').simulate('click', {preventDefault: () => {}});
  expect(wrapper.state('validationError')).toBe(true);
})