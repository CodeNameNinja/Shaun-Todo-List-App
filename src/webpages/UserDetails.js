import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './UserDetails.css';

const UserDetails = (props) => {
    const [user, setUserData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const params = useParams();

    const fetchUserDetails = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://api.github.com/users/${params.id}`);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
        
            const data = await response.json();

            setUserData(data);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, []);
    
    useEffect(() => {
        fetchUserDetails();
    }, []);

    return(
        <div className="user-details">
            <div className="user-details__column">
                <img alt="avatar" style={{ width: '70px' }} src={user.avatar_url} /> 
                <p>Login: {user.login}</p>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
            </div>
            <div className="user-details__column">
                <p><Link to={`/user/${user.login}/followers`}>Followers:</Link>{user.followers}</p>
                <p><Link to={`/user/${user.login}/following`}>Following:</Link>{user.following}</p>
                <p><Link to={`/user/${user.login}/repos`}>Repos:</Link>{user.public_repos}</p>
                <p><Link to={`/user/${user.login}/gists`}>Gists:</Link>{user.public_gists}</p>
            </div>
        </div>
    );
}

export default UserDetails;