import React from 'react';

import { Link } from 'react-router-dom';

const Gists = (props) => {

    return(
        <tr>
            <td>
                <h4>{props.owner}</h4>     
            </td>
            <td>
                <h4><Link to={{ pathname: props.htmlUrl }} target="_blank">Gist</Link></h4>   
            </td>
            <td>
                <h4>{props.comments}</h4>     
            </td>
            <td>
                <h4>{props.createdAt}</h4>     
            </td>
            <td>
                <h4>{props.updatedAt}</h4>     
            </td>
        </tr>
    );
}
export default Gists;