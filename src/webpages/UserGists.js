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

            console.log(`Gists`, gists);

        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, []);
    
    useEffect(() => {
        fetchUserGists();
    }, []);

    return(
        <div>
            <h1>Gists</h1>
            <table>
                <thead>
                    <td><p>Owner</p></td>
                    <td><p>URL</p></td>
                    <td><p>Comments</p></td>
                    <td><p>Created</p></td>
                    <td><p>Updated</p></td>
                </thead>
                {gists.map((user) => (
                    <Gists
                        owner={user.owner.login}
                        htmlUrl={user.html_url}
                        comments={user.comments}
                        createdAt={user.created_at}
                        updatedAt={user.updated_at}

                    />
                ))}
            </table>
        </div>
    );
}

export default UserGists;