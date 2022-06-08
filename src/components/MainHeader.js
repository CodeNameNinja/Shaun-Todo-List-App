import { NavLink } from "react-router-dom";

const MainHeader = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/users'>Users</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader;