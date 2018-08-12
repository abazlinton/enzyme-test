import React, { Component } from 'react';
import UserList from './UserList';

class App extends Component {
  render() {
    const users = [
      {name: 'Alex'},
      {name: 'Colin'},
      {name: 'Craig'},
      {name: 'John'}
    ]
    return (
       <UserList users={users}/>
    );
  }
}

export default App;
