import React from 'react';
import ReactDOM from 'react-dom';
import User from './User';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


beforeAll(()=>{
  configure({ adapter: new Adapter() });
})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<User />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders a li', () => {
  const wrapper = shallow(<User />);
  expect(wrapper.exists('li')).toBe(true)
});

it('renders a li with name', () => {
  const wrapper = shallow(<User name='Alex' />);
  expect(wrapper.contains(<li>Alex</li>)).toBe(true)
});



