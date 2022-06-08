import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const params = useParams();

    console.log(params.id);

return(
        <div>
            <h1>User Details</h1>    
            <p>{params.id}</p>      
        </div>
    );
}

export default UserDetails;