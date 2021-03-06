import React from 'react';
import PropTypes from 'prop-types';

import { Redirect, Route } from 'react-router';

export const PrivateRoute = ({ 
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    localStorage.setItem('lastpath', rest.location.pathname);

    return (
        <Route {...rest}
            component={ (props) =>(
                ( isAuthenticated )
                    ? <Component { ...props} />
                    : ( <Redirect to= "/login" />)
            )}
        />
    )
}

PrivateRoute.prototypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
