import React from 'react';

import { Link } from 'react-router-dom';

const Following = (props) => {

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
                <h4><Link to={{ pathname: props.html }} target="_blank">Github</Link></h4>   
            </td>
            <td>
                <h4>{props.node}</h4>    
            </td>
        </tr>
    );
}
export default Following;