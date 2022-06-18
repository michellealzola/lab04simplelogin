import React from 'react'
import User from './User'

function UsersList() {
    const users = 
    [
        {
            id: 147852,
            username: 'Mike',
            password: 'M!ke123'
        },
        // {
        //     id: 147853,
        //     username: 'Mary',
        //     password: 'm@ry456'
        // }
        

    ]
    
    const usersList = users.map(user => <User key={user.id} user = {user}/>)

    return <div>{usersList}</div>
}

export default UsersList