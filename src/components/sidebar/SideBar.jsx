import React from 'react';
import {Image} from "react-bootstrap";
import logo from "../../logo.svg";

const SideBar = () => {
    return (
        <>
            <div className="border-end sticky-top" id="sidebar-wrapper">
                <div className="sticky-top">
                    <div className="sidebar-heading border-bottom bg-light"><Image src={logo}/></div>
                    <div className="list-group list-group-flush">
                        <a className="list-group-item list-group-item-action list-group-item-light p-3"
                           href="#!">Dashboard</a>
                        <a className="list-group-item list-group-item-action list-group-item-light p-3"
                           href="#!">Shortcuts</a>
                        <a className="list-group-item list-group-item-action list-group-item-light p-3"
                           href="#!">Overview</a>
                        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Events</a>
                        <a className="list-group-item list-group-item-action list-group-item-light p-3"
                           href="#!">Profile</a>
                        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Status</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideBar;