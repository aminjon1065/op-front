import React from 'react';
import {Route, Switch} from "react-router-dom";
import Main from "./Main";
import Login from "./Auth/LogIn";

const Content = () => {
    return (
        <>
         <Switch>
             <Route path="/" exact component={Main}/>
             <Route path="/login" component={Login} />
         </Switch>
        </>
    );
};

export default Content;