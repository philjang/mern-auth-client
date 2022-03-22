import { Link } from 'react-router-dom'

export default function Navbar ({ handleLogout, currentUser }) {
    // if the user is logged in
    const loggedIn = (
        <>
            {/* if the user is logged in */}
            <Link to='/profile'>Profile</Link>
            <Link to='/'>
                {/* todo: add function to logout */}
                <span onClick={handleLogout}>Log Out</span>
            </Link>
        </>
    )

    // if the user is logged out
    const loggedOut = (
        <>
            {/* if the user is logged out */}
            <Link to='/register'>Sign Up</Link>
            <Link to='/login'>Log In</Link>
        </>
    )

    return (
        <nav>
            <Link to='/'>User App</Link>
            {currentUser ? loggedIn : loggedOut}
        </nav>
    )
}