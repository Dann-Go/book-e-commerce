import {Link} from "react-router-dom";
import './navbar.css'

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to='/'>Home</Link>
            {/*<div className="auth">*/}
                <Link to='/sign-in'>Sign In</Link>
                <Link to='/sign-up'>Sign Up</Link>
        {/*</div>*/}
</nav>
)
}

export default NavBar;