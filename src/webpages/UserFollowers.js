import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import Followers from '../components/Followers';

const UserFollowers = (props) => {
    const [followers, setUserFollowers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const params = useParams();

    console.log(params);

    // const data = await response.json();
    const fetchUserFollowers = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://api.github.com/users/${params.id}/followers`);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
        
            const data = await response.json();

            console.log('data', data);

            setUserFollowers(data);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, []);
    
    useEffect(() => {
        fetchUserFollowers();
    }, []);

    return(
        <div>
            <h1>Followers</h1>
            <table>
                <thead>
                    <td><p>Username</p></td>
                    <td><p>User Type</p></td>
                    <td><p>Profile Image</p></td>
                    <td><p>URL</p></td>
                    <td><p>Node</p></td>
                </thead>
                {followers.map((user) => (
                    <Followers
                        login={user.login}
                        type={user.type}
                        avatar={user.avatar_url}
                        html={user.html_url}
                        node={user.node_id}
                    />
                ))}
            </table>
        </div>
    );
}

export default UserFollowers;