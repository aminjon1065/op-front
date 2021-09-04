import React from 'react';
import {Route, Switch} from "react-router-dom";
import Main from "./Main";
import Login from "./Auth/LogIn";
import Dashboard from "./Dashboard";
import Register from "./Auth/Register";

const Content = () => {
    return (
        <>
         <Switch>
             <Route path="/" exact component={Main}/>
             <Route path="/dashboard" exact component={Dashboard} />
             <Route path="/login" component={Login} />
             <Route path="/register" component={Register} />
         </Switch>
        </>
    );
};

export default Content;