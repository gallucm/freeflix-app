import { useEffect } from 'react';
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
import { AdminRoute } from './AdminRoute';
import { useAdmin } from '../hooks/useAdmin';
import { MyListScreen } from '../components/streaming/MyListScreen';
import { ProfileScreen } from '../components/profile/ProfileScreen';

export const AppRouter = () => {

    const { checking, loggedUser } = useSelector(state => state.auth);

    const dispatch = useDispatch();
    const isAdmin = useAdmin();

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
                    <PublicRoute exact path="/login" isAuthenticated={ loggedUser != null ? true : false} component={LoginScreen}></PublicRoute>
                    <PublicRoute exact path="/register" isAuthenticated={ loggedUser != null ? true : false} component={RegisterScreen}></PublicRoute>

                    <AdminRoute exact path="/admin" isAdmin={ isAdmin } component={AdminScreen}></AdminRoute> 

                    <PrivateRoute exact path="/profile" isAuthenticated={ loggedUser != null ? true : false} component={ProfileScreen}></PrivateRoute>
                    <PrivateRoute exact path="/my-list" isAuthenticated={loggedUser != null ? true : false} component={MyListScreen}></PrivateRoute>
                    <PrivateRoute exact path="/m/:id" isAuthenticated={loggedUser != null ? true : false} component={MovieSelected}></PrivateRoute> 
                    <PrivateRoute exact path="/" isAuthenticated={loggedUser != null ? true : false} component={HomeScreen}></PrivateRoute> 

                    <Redirect to="/login" />
                </Switch>
            </div>
        </Router>
    )
}
