import React from 'react'
import User from './User'

const UserList = ({users}) => {

  let userComponents = null
  
  if (users){
    userComponents = users.map((user, index) => <User name={user.name} key={index}/>)
  }

  return <ul>
    {userComponents}
  </ul>
}

export default UserList