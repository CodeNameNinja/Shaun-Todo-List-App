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
        
        <table>
            <tr>
                <td>Repos:</td>
            </tr>
            {repos.map((user) => (
                <Repos
                    name={user.name}
                />
            ))}
        </table>
    );
}

export default UserRepos;