import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({
    component: Comp,
    isLoggedIn,
    path,
    ...rest
}) => {
    return (
        <Route
            path={path}
            {...rest}
            render={props => {
                return isLoggedIn ? <Comp {...props} /> : <Redirect to="/" />;
            }}
        />
    );
};
