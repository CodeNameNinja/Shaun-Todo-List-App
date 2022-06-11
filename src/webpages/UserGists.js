import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import Gists from '../components/Gists';

const UserGists = (props) => {
    const [gists, setUserGists] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const params = useParams();

    console.log(params);

    const fetchUserGists = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://api.github.com/users/${params.id}/gists`);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
        
            const data = await response.json();

            setUserGists(data);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, []);
    
    useEffect(() => {
        fetchUserGists();
    }, []);

    return(
        
        <table>
            <tr>
                <td>Gists:</td>
            </tr>
            {gists.map((user) => (
                <Gists
                    url={user.url}
                />
            ))}
        </table>
    );
}

export default UserGists;