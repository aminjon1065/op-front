import React, {useState} from 'react';
import {Container, FloatingLabel, Image, Form, Button} from "react-bootstrap";
import logo from './../../../logo.svg'

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState(null);
    const [validated, setValidated] = useState(false);
    const [validatePassword, setValidatePassword] = useState(false)

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleNameEmail = (event) => {
        setEmail(event.target.value)
    }
    const handleNamePassword = (event) => {
        if (event.target.value.length === 8) {
            setValidatePassword(true)
        }
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const password = form.password.value
        setValidated(true);
        console.log(form.password)
    };
    return (
        <>
            <div className="min-vh-100 bg-login">
                <Container className="d-flex justify-content-center align-content-center">
                    <div className="shadow m-5 login-form p-3 bg-white">
                        <div className="d-flex justify-content-center">
                            <Image src={logo} width={200}/>
                        </div>
                        <div className="d-flex justify-content-center">
                            <h2 className="align-items-center">Register</h2>
                        </div>
                        <Form onSubmit={handleSubmit}>
                            <FloatingLabel
                                controlId="floatingInputName"
                                label="Name"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    value={name}
                                    required
                                    name="name"
                                    onChange={handleNameChange}
                                />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInputEmail"
                                label="Email address"
                                className="mb-3"
                            >
                                <Form.Control
                                    value={email}
                                    required
                                    onChange={handleNameEmail}
                                    type="email"
                                />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInputPassword"
                                label="Password"
                                className="mb-3"
                            >
                                <Form.Control
                                    value={password}
                                    name="password"
                                    required
                                    isInvalid={validatePassword}
                                    onChange={handleNamePassword}
                                    type="password"
                                />
                            </FloatingLabel>
                            <Button type="submit" variant="teal">Register</Button>
                        </Form>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Register;