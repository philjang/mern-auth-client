import { Link } from 'react-router-dom'

export default function Navbar () {
    return (
        <nav>
            <Link to='/'>User App</Link>

            {/* if the user is logged in */}
            <Link to='/'>
                {/* todo: add function to logout */}
                <span></span>
            </Link>
            <Link to='/profile'>Profile</Link>
            
            {/* if the user is logged out */}
            <Link to='/register'>Sign Up</Link>
            <Link to='/login'>Log In</Link>
        </nav>
    )
}