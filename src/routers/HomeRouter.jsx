import React from 'react'
// import Home from '../pages/home/Home';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../page/login/Login';

export default function HomeRouter() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Login} />
                <Redirect to='/' />
            </Switch>
        </div>
    )
}
