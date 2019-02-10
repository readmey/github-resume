import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm.js';

it('renders error text "username required" when submit form with empty username', () => {
  const wrapper = shallow(<SearchForm />);
  wrapper.setProps({ validationError: true });
  expect(wrapper.exists('.input__validation--error')).toEqual(true)
})
