import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Resume from './Resume.js';

const match = {
  match : {
    params: {
      username: "test"
    }
  }
}

// it('should render the Loader component if data is null', () => {
//   const wrapper = mount(<Resume {...match} />);
//   wrapper.setState({ isFetching: false })
//   expect(wrapper.exists('.loader')).toEqual(true)
// });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Resume {...match} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
