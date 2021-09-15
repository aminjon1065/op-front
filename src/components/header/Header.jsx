import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Container, Image, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from './../../logo.svg';
import LogOutButton from "./logOut/logOutButton";

const Header = () => {
    const [menuToggle, setMenuToggle] = useState(true);
    const [navExpanded, setNavExpanded] = useState(false);


    const setExpanded = (expanded) => {
        setNavExpanded(expanded);
    };
    const closeNav = () => {
        setNavExpanded(false);
    };

    function toggleMenu(event) {
        event.preventDefault()
        setMenuToggle(prevState => !menuToggle);
        document.body.classList.toggle('sb-sidenav-toggled')
    }

    return (
        <>
            <Navbar
                onToggle={setExpanded}
                bg="light"
                expand="lg"
                sticky="top"
                expanded={navExpanded}
            >
                <Container fluid>
                    <button
                        className="btn btn-secondary shadow-sm"
                        id="sidebarToggle"
                        onClick={toggleMenu}
                    >
                        <i className={`fas ${menuToggle ? 'fa-bars ' : 'fa-ellipsis-v'}`}></i>
                    </button>
                    <Navbar.Brand
                        as={Link}
                        to="/"
                    >
                        <Image
                            width="80px"
                            src={logo}
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                    />
                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        className="justify-content-end"
                    >
                        <Nav className="me-auto">
                            <Nav.Link onClick={closeNav} as={Link} to="/">Home</Nav.Link>
                            <Nav.Link onClick={closeNav} as={Link} to="/register">Register</Nav.Link>
                            <Nav.Link onClick={closeNav} as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link onClick={closeNav} as={Link} to="/login">Login</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={closeNav} as={Link} to="/">Home</NavDropdown.Item>
                                <NavDropdown.Item onClick={closeNav} as={Link} to="/login">Login</NavDropdown.Item>
                                <NavDropdown.Item onClick={closeNav} href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item onClick={closeNav} href="#action/3.4">Separated
                                    link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/">Home</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            <NavDropdown.Item><LogOutButton /></NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;