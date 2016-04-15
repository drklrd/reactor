// var React = require('react');
import React from 'react';
import ReactDom from 'react-dom';
import {Router,Route,IndexRoute,hashHistory,useRouterHistory} from "react-router";
import { createHashHistory } from 'history'
// var ReactDom = require('react-dom');
// var Router = require('react-router');
// var Route = Router.Route;
// var DefaultRoute = Router.DefaultRoute;

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

var APP = require('./components/APP');

var Audience = require('./components/Audience');
var Speaker = require('./components/Speaker');
var Board = require('./components/Board');
var notFound = require('./components/notFound');


var routes = (
	<Router history={appHistory}>
		<Route path="/" component={APP}>
			<IndexRoute component={Audience}/>.
			<Route path="audience" component={Audience}>
			</Route>
			<Route path="speaker" component={Speaker}>
			</Route>
			<Route path="board" component={Board}>
			</Route>
			<Route path="*" component={notFound}/>
		</Route>
		
	</Router>


);
console.log(routes)


// ReactDom.render(<Router>{routes}</Router>,document.getElementById('react-container'));	
ReactDom.render(routes,document.getElementById('react-container'));	



