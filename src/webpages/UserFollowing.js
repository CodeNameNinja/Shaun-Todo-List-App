import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import Following from '../components/Following';

const UserFollowing = (props) => {
    const [following, setUserFollowing] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const params = useParams();

    console.log(params);

    const fetchUserFollowing = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://api.github.com/users/${params.id}/following`);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
        
            const data = await response.json();

            console.log(data);

            setUserFollowing(data);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, []);
    
    useEffect(() => {
        fetchUserFollowing();
    }, []);

    return(
        
        <table>
            <tr>
                <td>Following:</td>
            </tr>
            {following.map((user) => (
                <Following
                    login={user.login}
                />
            ))}
        </table>
    );
}

export default UserFollowing;