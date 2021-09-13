import React, {useState} from "react";
import {Button, Container, FloatingLabel, Form, Image, Alert} from "react-bootstrap";
import logo from "./../../../logo.svg";
import styles from "./styles.module.css";
import LoginService from "../../../services/Auth/Login";
import {useDispatch, useSelector} from "react-redux";
import authActions from "../../../state/actions/auth.action";
import {Link, Redirect} from "react-router-dom";
import {CSSTransition} from "react-transition-group";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.auth.isLoggedIn);
    const emailHandler = (event) => {
        setEmail(event.target.value);
    };
    const passwordHandler = (event) => {
        setPassword(event.target.value);
    };
    const login = () => {
        LoginService.login(email, password).then((response) => {
            if (response.access_token) {
                LoginService.authorization(response.access_token).then((response) => {
                    dispatch(authActions.login(response));
                });
            } else {
                dispatch(authActions.loginFail())
                setShow(true)
            }
        });
    };
    const alert = (
        <div className={`float-end col-2 position-absolute ${styles.zIndex}`}>
            <CSSTransition
                in={show}
                timeout={300}
                classNames="alert"
                unmountOnExit
            >
                <Alert variant="danger" onClick={() => setShow(false)} show={show} dismissible transition>
                    Error LogIn
                </Alert>
            </CSSTransition>
        </div>
    )
    return selector ? (
        <Redirect to="/"/>
    ) : (
        <>
            <div className="min-vh-100 bg-login">
                <Container className="d-flex justify-content-center align-content-center">
                    <div className="shadow m-5 login-form p-3 bg-white">
                        <h1 className="text-center mt-5 mb-3">Sign In</h1>
                        <Container className="d-flex justify-content-center">
                            <Image src={logo} width="150"/>
                        </Container>
                        <Container>
                            <FloatingLabel
                                controlId="floatingInputEmail"
                                label="Email address"
                                className="mb-3 shadow-sm rounded"
                            >
                                <Form.Control
                                    type="email"
                                    value={email}
                                    onChange={emailHandler}
                                    placeholder="name@example.com"
                                />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInputPassword"
                                label="Password"
                                className="mb-3 shadow-sm rounded"
                            >
                                <Form.Control
                                    type="password"
                                    value={password}
                                    onChange={passwordHandler}
                                    placeholder="password"
                                />
                            </FloatingLabel>
                        </Container>
                        <div className="d-flex justify-content-center align-content-center">
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={login}
                                className={styles.btnGrad}
                            >
                                Test
                            </Button>
                        </div>
                        <div className="d-flex justify-content-center align-content-center mt-5 pt-5">
                            <p>
                                or{" "}
                                <strong>
                                    <Link className="link-info" to="/register">
                                        Register
                                    </Link>
                                </strong>
                            </p>
                        </div>
                    </div>
                </Container>
                {
                    show && alert
                }
            </div>
        </>
    );
};

export default Login;
