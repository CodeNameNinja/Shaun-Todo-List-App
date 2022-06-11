import React  from 'react';

import './Users.module.css'

import User from '../components/User';

const UserList = (props) => {
    
    return (
        <table className="userlist">
            <tr>
                <th>Username</th>
                <th>User Type</th>
                <th>Profile Image</th>
                <th>More Details</th>
            </tr>
            {props.users.map((user) => (
                <User
                    login={user.login}
                    type={user.type}
                    avatar={user.avatar}
                    name={user.name}
                    url={user.url}
                />
            ))}
        </table>
    )
}

export default UserList;