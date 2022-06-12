import React from 'react';
import { Link } from 'react-router-dom';

const User = (props) => {

    return(
        <tr>
            <td>
                <h4>{props.login}</h4>    
            </td>
            <td>
                <h4>{props.type}</h4>    
            </td>
            <td>
                <img alt="avatar" style={{ width: '50px' }} src={props.avatar} /> 
            </td>
            <td>
                <Link to={`/user/${props.login}`}>User Details</Link>
            </td>
        </tr>
    );
}

export default User;