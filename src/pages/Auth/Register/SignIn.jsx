import React from 'react';
import {Formik, Form as Formes} from "formik";
import * as yup from 'yup';
import {Alert, Button, Container, Form, FloatingLabel, Image} from "react-bootstrap";
import logo from "../../../logo.svg";


const SignIn = () => {
    const FILE_SIZE = 2000 * 2000;
    const SUPPORTED_FORMATS = [
        "image/jpg",
        "image/jpeg",
        "image/gif",
        "image/png"
    ];
    const onChangeAvatar = (e, setFieldValue) => {
        const avatar = e.target.files[0]
        setFieldValue('avatar', e.target.files[0])
    }
    const validationSchema = yup.object().shape({
        name: yup.string()
            .min(3, '3 is Short')
            .max(50, "50 is Long")
            .typeError('Only string')
            .required('Required'),
        email: yup.string().email('Invalid Email').required('Required'),
        password: yup.string()
            .required('No password provided')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
        avatar: yup.mixed()
            .required("A file is required")
        // .test(
        //     "fileSize",
        //     "File too large",
        //     (values) => values && values.size <= FILE_SIZE
        // )
        // .test(
        //     "fileFormat",
        //     "Unsupported Format",
        //     (values) => values && SUPPORTED_FORMATS.includes(values.type)
        // )
    })
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    avatar: ''
                }}
                validateOnBlur
                onSubmit={values => {
                    console.log(values)
                }}
                validationSchema={validationSchema}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      isValid,
                      handleSubmit,
                      dirty,
                  }) => (
                    <Formes>
                        <div className="min-vh-100 bg-login">
                            <Container className="d-flex justify-content-center align-content-center">
                                <div className="shadow m-5 login-form p-3 bg-white">
                                    <div className="d-flex justify-content-center">
                                        <Image src={logo} width={200}/>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <h2 className="align-items-center">Register</h2>
                                    </div>
                                    <Container>
                                        <FloatingLabel
                                            controlId="floatingInputName"
                                            label="Name"
                                            className="mb-3"
                                        >
                                            <Form.Control
                                                type="text"
                                                required
                                                name={'name'}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.name}
                                            />
                                        </FloatingLabel>
                                        {touched.name && errors.name &&
                                        <Alert variant={"danger"}>{errors.name}</Alert>
                                        }
                                    </Container>

                                    <Container>
                                        <FloatingLabel
                                            controlId="floatingInputName"
                                            label="Email"
                                            className="mb-3"
                                        >
                                            <Form.Control
                                                type="email"
                                                required
                                                name={'email'}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                            />
                                        </FloatingLabel>
                                        {touched.email && errors.email &&
                                        <Alert variant={"danger"}>{errors.email}</Alert>}
                                    </Container>

                                    <Container>
                                        <FloatingLabel
                                            controlId="floatingInputName"
                                            label="Password"
                                            className="mb-3"
                                        >
                                            <Form.Control
                                                type="password"
                                                required
                                                name={'password'}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.password}
                                            />
                                        </FloatingLabel>
                                        {touched.password && errors.password &&
                                        <Alert variant={"danger"}>{errors.password}</Alert>}
                                    </Container>
                                    <Container>
                                        <Form.Group controlId="formFile" className="mb-3">
                                            <Form.Label>Upload Avatar</Form.Label>
                                            <Form.Control
                                                type="file"
                                                name={'avatar'}
                                                onChange={handleChange(onChangeAvatar)}
                                                onBlur={handleBlur}
                                                accept="image/*"
                                            />
                                        </Form.Group>
                                        {touched.avatar && errors.avatar &&
                                        <Alert variant={"danger"}>{errors.avatar}</Alert>}
                                    </Container>
                                    <Button
                                        disabled={!isValid && !dirty}
                                        onClick={handleSubmit}
                                        type="submit"
                                    >
                                        Submit
                                    </Button>
                                </div>
                            </Container>
                        </div>
                    </Formes>
                )}
            </Formik>
        </>
    );
};

export default SignIn;