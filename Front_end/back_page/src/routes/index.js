import React, { Component } from 'react';
import {Route,Switch,Redirect } from 'react-router-dom';

import Home from '../Home/Home';
import Login from '../Login/Login';
import User from '../User/User';
import Paint from '../Paint/Paint';
import Work from '../Work/Work';
import Collection from '../Collection/Collection';
import Nomatch from '../Nomatch/Nomatch';

class Routes extends Component {Collection
	render() {
		return (	
			<Switch>
				<Route exact path='/home' component={Home}/>
				<Route exact path='/login' component={Login}/>
				<Route exact path='/user' component={User}/>
				<Route exact path='/paint' component={Paint}/>
				<Route exact path='/work' component={Work}/>
				<Route exact path='/collection' component={Collection}/>
				<Route exact path='/nomatch' component={Nomatch}/>
				<Redirect to='/user'/> 
			</Switch>	
		)}
}

export default Routes
