import React, {useEffect} from 'react';
import SideBar from "../../components/sidebar/SideBar";
import Header from "../../components/header/Header";
import {Container} from "react-bootstrap";
import LoginService from './../../services/Auth/Login'
import {useDispatch, useSelector} from "react-redux";
import authActions from "../../state/actions/auth.action";
import {useHistory} from "react-router-dom";
import Sheduled from "./Vehicle/sheduled";


const Dashboard = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state.auth)
    const token = localStorage.getItem('jwt') || null
    const history = useHistory();
    useEffect(() => {
        const auth = (token) => {
            LoginService.authorization(token).then((res) => {
                dispatch(authActions.login(res))
            })
        }
        if (token && !selector.isLoggedIn) {
            auth(token)
        }

        if (!token) {
            history.push('/login')
        }
    }, [history, dispatch, selector.isLoggedIn, token])
    return (
        <>
            <div className="bg-milk d-flex" id="wrapper">
                <SideBar/>
                <div id="page-content-wrapper" className="sticky-top">
                    <Header/>
                    <Container fluid>
                        <h1>Dashboard</h1>
                        <Sheduled />
                    </Container>
                </div>
            </div>
        </>
    );
};

export default Dashboard;