import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { AdminScreen } from '../components/admin/AdminScreen';
import { HomeScreen } from '../components/streaming/HomeScreen';
import { MovieSelected } from '../components/streaming/MovieSelected';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/admin"> <AdminScreen/> </Route>
                    <Route exact path="/"> <HomeScreen/> </Route>
                    <Route exact path="/m/:id"> <MovieSelected/></Route>

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>

    )
}
