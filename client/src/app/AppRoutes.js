import React from 'react';
import {Route, IndexRoute} from 'react-router';

// Here we define all our material-ui ReactComponents.
import Master from './components/Master';
import Home from './components/pages/Home';

import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import MySports from './components/pages/MySports';
import Activities from './components/pages/Activity/Activities';
import StartActivity from './components/pages/Activity/StartActivity';
import FriendsList from './components/pages/FriendsList';
import ChatList from './components/pages/ChatList';

/**
 * Routes: https://github.com/reactjs/react-router/blob/master/docs/API.md#route
 *
 * Routes are used to declare your view hierarchy.
 *
 * Say you go to http://material-ui.com/#/components/paper
 * The react router will search for a route named 'paper' and will recursively render its
 * handler and its parent handler like so: Paper > Components > Master
 */
const AppRoutes = (
    <Route path="/" component={Master}>
        <IndexRoute component={Home}/>
        <Route path="home" component={Home}/>
        <Route path="sports" components={MySports}/>
        <Route path="activities" components={Activities}/>
        <Route path="startActivity" components={StartActivity}/>
        <Route path="friends" components={FriendsList}/>
        <Route path="chatlist" components={ChatList}/>
        <Route path="login" components={Login}/>
        <Route path="signup" components={SignUp}/>
    </Route>
);

export default AppRoutes;
