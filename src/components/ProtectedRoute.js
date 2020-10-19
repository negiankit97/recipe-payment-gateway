import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const isAuthorized = true;
const ProtectedRoute = ({ Component, ...rest }) => {
return <Route {...rest} render={(props) => !isAuthorized ? <Redirect to = "/login" /> : <Component {...props}/>}/>;
}

export default ProtectedRoute;