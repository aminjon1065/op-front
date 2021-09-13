import React from 'react';
import {Button} from "react-bootstrap";
import {useDispatch} from "react-redux";
import authActions from "../../../state/actions/auth.action";
import {useHistory} from "react-router-dom";

const LogOutButton = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const logout = () => {
        dispatch(authActions.logout())
        localStorage.removeItem('jwt')
        history.push('/')
    }
    return (
        <>
            <Button onClick={logout}>Logout</Button>
        </>
    );
};

export default LogOutButton;