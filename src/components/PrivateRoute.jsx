import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, ...rest }) => {
  return localStorage.getItem('token') ? <Element {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;