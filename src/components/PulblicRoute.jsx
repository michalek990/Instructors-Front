import {Navigate} from "react-router-dom";
import React from "react";

const PublicRoute = ({ element: Element, ...rest }) => {
    return localStorage.getItem('token') ?  <Navigate to="/" /> : <Element {...rest} />;
};

export default PublicRoute;