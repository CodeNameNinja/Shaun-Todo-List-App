import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import Repos from '../components/Repos';

const UserRepos = (props) => {
    const [repos, setUserRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const params = useParams();

    const fetchUserRepos = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://api.github.com/users/${params.id}/repos`);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
        
            const data = await response.json();

            setUserRepos(data);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, []);
    
    useEffect(() => {
        fetchUserRepos();
    }, []);

    return(
        <div>
            <h1>Repos</h1>
            <table>
                <thead>
                    <td><p>Name</p></td>
                    <td><p>Size</p></td>
                    <td><p>Language</p></td>
                    <td><p>Stargazers</p></td>
                    <td><p>Watchers</p></td>
                </thead>
                {repos.map((user) => (
                    <Repos
                        name={user.name}
                        url={user.html_url}
                        size={user.size}
                        language={user.language}
                        stargazers={user.stargazers_count}
                        watchers={user.watchers_count}
                    />
                ))}
            </table>
        </div>
    );
}

export default UserRepos;