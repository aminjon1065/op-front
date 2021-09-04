import React from 'react';
import {Container} from "react-bootstrap";

const Login = () => {
    return (
        <>
            <Container>
                <Container className="d-flex justify-content-center align-content-center">
                    <div className="shadow m-5 p-3 w-50 rounded">
                        <h1 className="text-center">Sign In</h1>
                    </div>
                </Container>
            </Container>
        </>
    );
};

export default Login;