import React  from 'react';


import User from '../components/User';
import './Users.module.css'

const UserList = (props) => {
    
    return (
        <div>
            <h1>GitHub Users</h1>
            <table className="userlist">
                <thead>
                    <td><p>Username</p></td>
                    <td><p>User Type</p></td>
                    <td><p>Profile Image</p></td>
                    <td><p>More Details</p></td>
                </thead>
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
        </div>
    )
}

export default UserList;