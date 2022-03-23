import { Link } from 'react-router-dom'

import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

export default function BootstrapNavbar ({ handleLogout, currentUser }) {
    // if the user is logged in
    const loggedIn = (
        <>
            <Nav.Link>

                {/* if the user is logged in */}
                <Link to='/profile'>Profile</Link>
                <Link to='/'>
                    {/* todo: add function to logout */}
                    <span onClick={handleLogout}>Log Out</span>
                </Link>
            </Nav.Link>
        </>
    )

    // if the user is logged out
    const loggedOut = (
        <>
            <Nav.Link>

                {/* if the user is logged out */}
                <Link to='/register'>Sign Up</Link>
                <Link to='/login'>Log In</Link>
            </Nav.Link>
        </>
    )

    // {/* <Link to='/'>User App</Link>
    // {currentUser ? loggedIn : loggedOut} */}
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to='/'>User App</Link></Nav.Link>
                        {currentUser ? loggedIn : loggedOut}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}