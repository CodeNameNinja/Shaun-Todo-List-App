import { NavLink } from "react-router-dom";

import "./MainHeader.css"

const MainHeader = () => {
    return (
        <header className="header">
            <div className="logo">Github Users</div>
            <nav className="nav">
                <ul>
                    <li>
                        <NavLink to='/users' activeClassName="">User List</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader;