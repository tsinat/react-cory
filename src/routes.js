'use strict';

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var routes = (
    <Route Name='app' path='/' handler={require('./components/app')}>
        <DefaultRoute hander={require('./components/homePage')} />
        <Route name='authors' handler={require('./components/authors/authorPage')} />
        <Route name='about' handler={require('./components/about/aboutPage')} />
    </Route>
);

module.exports = routes;
