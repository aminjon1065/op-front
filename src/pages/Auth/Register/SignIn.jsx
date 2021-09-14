import React from 'react';
import {Formik, Form as Formes, FieldArray} from "formik";
import * as yup from 'yup';
import {Alert, Button, Container, Form, FloatingLabel, Image} from "react-bootstrap";
import logo from "../../../logo.svg";


const SignIn = () => {

    const getError = (touched, error, idx) => {
        return touched && error && <p key={idx} className="text-danger">{error}</p>
    }
    const gerArrErrorsMessages = (errors) => {
        const result = [];
        errors && Array.isArray(errors) && errors.forEach((val) => {
            if (typeof val === "string") {
                result.push(val)
            } else {
                Object.values(val).forEach((err) => {
                    result.push(err)
                })
            }
        })
        return result
    }

    const getFileShema = (file) => file && ({
        file: file,
        type: file.type,
        name: file.name
    })
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
        avatar: yup.array().of(yup.object().shape({
            file: yup.mixed().test("fileSize", "File is Long", (value) => {
                if (!value) return false
                return value.size < 1000000
            }).required(),
            type: yup.string().oneOf(
                [
                    "image/jpg",
                    "image/jpeg",
                    "image/gif",
                    "image/png"
                ], "Add Correct File Format")
                .required(),
            name: yup.string().required()
        }).typeError("Add Avatar Image"))
    })
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    avatar: undefined
                }}
                validateOnBlur
                onSubmit={values => {
                    console.log(values)
                    console.log(values.avatar[0].file)
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
                                            controlId="floatingInputEmail"
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
                                            controlId="floatingInputPassword"
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
                                        {/*<Form.Group controlId="formFile" className="mb-3">*/}
                                        {/*    <Form.Label>Upload Avatar</Form.Label>*/}
                                        {/*    <Form.Control*/}
                                        {/*        type="file"*/}
                                        {/*        name={'avatar'}*/}
                                        {/*        onChange={handleChange((event)=>{*/}
                                        {/*            const {files} = event.target*/}
                                        {/*            const file = files.item(0)*/}
                                        {/*            if (!file) return*/}
                                        {/*            if(Array.isArray(values.avatar)){} else {*/}
                                        {/*                arrayHelper.push(file)*/}
                                        {/*            }*/}
                                        {/*        })}*/}
                                        {/*        onBlur={handleBlur}*/}
                                        {/*        accept="image/*"*/}
                                        {/*    />*/}
                                        {/*</Form.Group>*/}
                                        {console.log("file", values.avatar)}
                                        {console.log("size", errors.avatar)}
                                        <FieldArray name={"avatar"}>
                                            {(arrayHelper) => (
                                                <>
                                                    <p>
                                                        <input
                                                            type="file"
                                                            name={"avatar"}
                                                            onChange={(event) => {
                                                                const {files} = event.target
                                                                const file = getFileShema(files.item(0))
                                                                if (!file) {
                                                                    arrayHelper.remove(0)
                                                                }
                                                                if (Array.isArray(values.avatar)) {
                                                                    arrayHelper.replace(0, file)
                                                                } else {
                                                                    arrayHelper.push(file)
                                                                }
                                                            }}
                                                        />
                                                    </p>
                                                    {gerArrErrorsMessages(errors.avatar).map((err, idx) => getError(true, err, idx))}
                                                </>
                                            )}
                                        </FieldArray>
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