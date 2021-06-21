import React from 'react';
import PropTypes from 'prop-types';

import { Redirect, Route } from 'react-router';

export const AdminRoute = ({ 
    isAdmin,
    component: Component,
    ...rest
}) => {

    localStorage.setItem('lastpath', rest.location.pathname);

    return (
        <Route {...rest}
            component={ (props) =>(
                ( isAdmin )
                    ? <Component { ...props} />
                    : ( <Redirect to= "/" />)
            )}
        />
    )
}

AdminRoute.prototypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
