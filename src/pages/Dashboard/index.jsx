import React from 'react';
import SideBar from "../../components/sidebar/SideBar";
import Header from "../../components/header/Header";
import {Container} from "react-bootstrap";

const Dashboard = () => {
    return (
        <>
            <div className="bg-milk d-flex" id="wrapper">
                <SideBar/>
                <div id="page-content-wrapper" className="sticky-top">
                    <Header/>
                    <Container fluid>
                        <h1>Dashboard</h1>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default Dashboard;