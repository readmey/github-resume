import React from 'react';
import { shallow } from 'enzyme';
import Resume from './Resume.js';

it('should render the text Loading...  if state.data is null', () => {
  const match = {
    match : {
      params: {
        username: "test"
      }
    }
  }
  const wrapper = shallow(<Resume {...match} />);
  expect(wrapper.text()).toBe('Loading...');
});
