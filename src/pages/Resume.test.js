import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Resume from './Resume.js';

const match = {
  match : {
    params: {
      username: "test"
    }
  }
}

it('should render the text Loading...  if state.data is null', () => {
  const wrapper = shallow(<Resume {...match} />);
  expect(wrapper.text()).toBe('Loading...');
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Resume {...match} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
