import React from 'react';
import {Badge, Image, ListGroup, Nav, Navbar} from "react-bootstrap";
import logo from "../../logo.svg";
import {Link, useLocation} from "react-router-dom";

const SideBar = () => {
    const location = useLocation();
    return (
        <>
            <div className="border-end bg-sidebar sticky-top" id="sidebar-wrapper">
                <div className="sticky-top">
                    <div className="sidebar-heading">
                        <Image
                            src={logo}
                        />
                    </div>
                    <ListGroup variant="flush" activeKey={location.pathname}>
                        <Navbar bg="sidebar" variant="dark">
                            <Nav className="flex-column">
                                <Nav.Link as={Link} eventKey="/" to="/"> Home  <Badge pill bg="light"><i className="fas fa-home text-dark"></i></Badge></Nav.Link>
                                <Nav.Link as={Link} eventKey="/login" to="/login">Link</Nav.Link>
                                <Nav.Link eventKey="link-2">Link</Nav.Link>
                            </Nav>
                        </Navbar>
                    </ListGroup>

                </div>
            </div>
        </>
    );
};

export default SideBar;