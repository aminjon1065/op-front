import React from 'react';
import {Redirect} from "react-router-dom";
import {useSelector} from "react-redux";

const Main = () => {
    const selector = useSelector(state => state.auth);
    return (
        <div>
            {selector.isLoggedIn ? <Redirect to="/dashboard"/> : <Redirect to="/login"/>}
        </div>
    );
};

export default Main;