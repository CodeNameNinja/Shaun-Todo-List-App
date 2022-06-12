import React from 'react';

import { Link } from 'react-router-dom';

const Repos = (props) => {

    return(
        <tr>
            <td>
                <h4><Link to={{ pathname: props.url }} target="_blank">{props.name}</Link></h4>     
            </td>
            <td>
                <h4>{props.size}</h4>     
            </td>
            <td>
                <h4>{props.language}</h4>     
            </td>
            <td>
                <h4>{props.stargazers}</h4>     
            </td>
            <td>
                <h4>{props.watchers}</h4>     
            </td>
        </tr>
    );
}
export default Repos;