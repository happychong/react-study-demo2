import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, Home, About, Profile } from '../containers';
// import { Profile } from '../components';

export default (
    <Route path='/' component={App}>
        <Route path='profile/:username' component={Profile} />
        <IndexRoute component={Home} />
    </Route>
)
