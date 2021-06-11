import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { AdminScreen } from '../components/admin/AdminScreen';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { HomeScreen } from '../components/streaming/HomeScreen';
import { MovieSelected } from '../components/streaming/MovieSelected';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login"> <LoginScreen/></Route>
                    <Route exact path="/register"> <RegisterScreen/></Route>
                    <Route exact path="/admin"> <AdminScreen/> </Route>
                    <Route exact path="/m/:id"> <MovieSelected/></Route>
                    <Route exact path="/"> <HomeScreen/> </Route>

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>

    )
}
