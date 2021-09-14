import React from 'react';
import {Badge, Button, Image, InputGroup, ListGroup, Nav, Navbar} from "react-bootstrap";
import logo from "../../logo.svg";
import {Link, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {API_URL} from "../../VARIABLE";

const SideBar = () => {
    const selector = useSelector(state => state.auth)
    const location = useLocation();
    console.log(selector)
    console.log(`${API_URL}/avatars/${selector.user.avatar}`)
    return (
        <>
            <div className="border-end bg-sidebar sticky-top" id="sidebar-wrapper">
                <div className="sticky-top">
                    <div className="sidebar-heading">
                        <Image
                            src={`${API_URL}/avatars/${selector.user.avatar}` || logo}
                            alt="AVATAR"
                            width="190"
                        />
                    </div>
                    <InputGroup
                        size="sm"
                        className="ps-1"
                    >
                        <div
                            className="search"
                        >
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search..."
                                name=""
                            />
                            <Button
                                variant="teal"
                                href="#"
                                className="search-icon"
                            ><i className="fa fa-search"></i>
                            </Button>
                        </div>
                    </InputGroup>
                    <ListGroup variant="flush" activeKey={location.pathname}>
                        <Navbar bg="sidebar" variant="dark">
                            <Nav className="flex-column">
                                <Nav.Link as={Link} eventKey="/" to="/"> Home <Badge pill bg="light"><i className="fas fa-home text-dark"></i></Badge></Nav.Link>
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