import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Users = (props) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://api.github.com/users")
            .then(res => res.json())
            .then (
                (data) => {
                    setIsLoaded(true);
                    setUsers(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <section>
                {users.map(user => (
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <h3>Login: {user.login}</h3>
                                </td>
                                <td>
                                    <h3>Type: {user.type}</h3>
                                </td>
                                <td>
                                    <img alt="avatar" style={{ width: '70px' }} src={user.avatar_url} />
                                </td>
                                <td>
                                    <Link to={`/user/${user.login}`}>User Details</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                ))}
            </section>
        );
    }
}

export default Users;