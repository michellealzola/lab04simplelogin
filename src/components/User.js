import React from 'react'


function User({user}) {
  return (
    <div>
        ID: {user.id} <br/>
        username: {user.username} <br/>
        password: {user.password} <br/>        
    </div>
  )
}

export default User