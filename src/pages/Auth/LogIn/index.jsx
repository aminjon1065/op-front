import React, {useState} from 'react';
import {Button, Container, FloatingLabel, Form, Image} from "react-bootstrap";
import logo from './../../../logo.svg';
import styles from './styles.module.css';
import LoginService from "../../../services/Auth/Login";
import {useDispatch, useSelector} from "react-redux";
import authActions from "../../../state/actions/auth.action";
import {Link, Redirect} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const dispatch = useDispatch();
    const selector = useSelector(state => state.auth.isLoggedIn);
    const emailHandler = (event) => {
        setEmail(event.target.value)
    }
    const passwordHandler = (event) => {
        setPassword(event.target.value)
    }
    const login = () => {
        LoginService.login(email, password).then((response) => {
            setToken(response.access_token)
            if (token) {
                LoginService.authorization(response.access_token).then((response) => {
                    dispatch(authActions.login(response))
                })
            }
            dispatch(authActions.loginFail())
        })
    }
    return (
        selector ? <Redirect to="/"/> :
            <>
                <div className="vh-100 bg-login">
                    <Container className="d-flex justify-content-center align-content-center">
                        <div className="shadow m-5 login-form p-3 bg-white">
                            <h1 className="text-center mt-5 mb-3">Sign In</h1>
                            <Container className="d-flex justify-content-center">
                                <Image src={logo} width="150"/>
                            </Container>
                            <Container>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-3 shadow-sm rounded"
                                >
                                    <Form.Control type="email" value={email} onChange={emailHandler}
                                                  placeholder="name@example.com"/>
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Password"
                                    className="mb-3 shadow-sm rounded"
                                >
                                    <Form.Control type="password" value={password} onChange={passwordHandler}
                                                  placeholder="password"/>
                                </FloatingLabel>
                            </Container>
                            <div className="d-flex justify-content-center align-content-center">
                                <Button variant="outline" size="lg" onClick={login}
                                        className={styles.btnGrad}>Test</Button>
                            </div>
                            <div className="d-flex justify-content-center align-content-center mt-5 pt-5">
                                <p>or <strong><Link className="link-info" to="/register">Register</Link></strong></p>
                            </div>
                        </div>
                    </Container>
                </div>
            </>
    )
};

export default Login;