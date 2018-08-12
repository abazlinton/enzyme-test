import React from 'react';
import ReactDOM from 'react-dom';
import enzyme from 'enzyme';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserList from './UserList';
import User from './User'


beforeAll(()=>{
  configure({ adapter: new Adapter() });
})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserList />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders a ul', () => {
  const wrapper = enzyme.shallow(<UserList/>)
  expect(wrapper.exists('ul')).toBe(true)
});

it('renders no Users when no data', () => {
  const wrapper = enzyme.mount(<UserList/>)
  expect(wrapper.contains([<User/>])).toBe(false)
});

it('renders correct users', () => {
  const users = [{name: 'Alex'}, {name: 'What'}]
  const expected = [<User name='Alex'/>, <User name='What'/>]
  const wrapper = enzyme.mount(<UserList users={users}/>)
  expect(wrapper.containsAllMatchingElements(expected)).toBe(true)
});

it('renders correct keys', () => {
  const users = [{name: 'Alex'}, {name: 'What'}]
  const wrapper = enzyme.mount(<UserList users={users}/>)
  const renderedUsers = wrapper.find(User)
  expect(renderedUsers.at(0).key()).toBe('0')
  expect(renderedUsers.at(1).key()).toBe('1')
});




