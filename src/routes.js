import React from 'react';
import {Route, IndexRoute, withRouter} from 'react-router';
import {routerActions} from 'react-router-redux';
import {UserAuthWrapper} from 'redux-auth-wrapper';

import App from './components/App/';
import HomePage from './components/HomePage/';
import AboutPage from './components/AboutPage/';
import NotFoundPage from './components/NotFoundPage/index.js';

import LoginPage from './containers/User/LoginPage';
import LogoutPage from './containers/User/LogoutPage';
import ProfilePage from './containers/User/ProfilePage';
import RegistrationPage from './containers/User/RegistrationPage';

import Create from './containers/BlogPost/CreatePostContainer';
import Update from './containers/BlogPost/UpdatePostContainer';
import PostsPage from './containers/BlogPost/ListPostsContainer';

// Redirects to /login by default
const UserIsAuthenticated = UserAuthWrapper({
    authSelector: state => state.auth, // how to get the user state
    predicate: (auth) => auth.isAuthenticated, // function to run against the auth state to determine if authenticated
    redirectAction: routerActions.replace, // the redux action to dispatch for redirect
    wrapperDisplayName: 'UserIsAuthenticated' // a nice name for this auth check
});

export default (
  <Route path="/" component={App}>
    {/*/!*<IndexRedirect to="/posts"/>*!/ redirects to the specified page*/}
    <IndexRoute component={HomePage}/>
    <Route path="/posts/create" component={withRouter(Create)}/>
    <Route path="/posts/update/:postId" component={withRouter(Update)}/>
    <Route path="posts" component={PostsPage}/>
    <Route path="login" component={LoginPage}/>
    <Route path="logout" component={LogoutPage}/>
    <Route path="profile" component={UserIsAuthenticated(ProfilePage)}/>
    <Route path="register" component={RegistrationPage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
