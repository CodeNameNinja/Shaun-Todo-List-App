import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
        <div>
            <img alt="avatar" style={{ width: '70px' }} src={user.avatar_url} /> 
            <h1>Login: {user.login}</h1>
            <h1>Name: {user.name}</h1>
            <h1>Email: {user.email}</h1>
            <h1>Followers: {user.followers}</h1>
            <Link to={`/user/${user.login}/followers`}>Followers</Link>
            <h1>Following: {user.following}</h1>
            <Link to={`/user/${user.login}/following`}>Following</Link>
            <h1>Repos: {user.public_repos}</h1>
            <Link to={`/user/${user.login}/repos`}>Repos</Link>
            <h1>Gists: {user.public_gists}</h1>
            <Link to={`/user/${user.login}/gists`}>Gists</Link>
        </div>
    );
}

export default UserDetails;