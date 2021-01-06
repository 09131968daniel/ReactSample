import React from 'react';
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (!localStorage.getItem('username')) return <Redirect to="/Login" />;
                return Component ? <Component {...props} /> : render(props) ;
            }}
        />
     );
};
 
export default ProtectedRoute ;