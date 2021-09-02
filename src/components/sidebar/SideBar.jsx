import React from 'react';
import {Image, ListGroup} from "react-bootstrap";
import logo from "../../logo.svg";
import {Link, useLocation} from "react-router-dom";

const SideBar = () => {
    const location = useLocation();
    return (
        <>
            <div className="border-end bg-transparent sticky-top" id="sidebar-wrapper">
                <div className="sticky-top">
                    <div className="sidebar-heading border-bottom bg-transparent"><Image src={logo}/></div>
                    <ListGroup variant="flush" activeKey={location.pathname}>
                        <ListGroup.Item eventKey="/" as={Link} to="/" action variant="sidebar">
                            Home
                        </ListGroup.Item>
                        <ListGroup.Item eventKey="/login" as={Link} to="/login" action variant="sidebar">
                            Login
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        </>
    );
};

export default SideBar;