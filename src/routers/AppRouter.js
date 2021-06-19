import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import { startChecking } from '../actions/auth';

import { AdminScreen } from '../components/admin/AdminScreen';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { HomeScreen } from '../components/streaming/HomeScreen';
import { MovieSelected } from '../components/streaming/MovieSelected';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const { checking, id } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startChecking());        
    }, [dispatch]);

    if (checking){
        return <h5>Espere...</h5>
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute exact path="/login" isAuthenticated={ !!id} component={LoginScreen}></PublicRoute>
                    <PublicRoute exact path="/register" isAuthenticated={ !!id} component={RegisterScreen}></PublicRoute>

                    <PrivateRoute exact path="/admin" isAuthenticated={ !!id } component={AdminScreen}></PrivateRoute> 
                    <PrivateRoute exact path="/m/:id" isAuthenticated={ !!id } component={MovieSelected}></PrivateRoute> 
                    <PrivateRoute exact path="/" isAuthenticated={ !!id } component={HomeScreen}></PrivateRoute> 

                    <Redirect to="/login" />
                </Switch>
            </div>
        </Router>
    )
}
