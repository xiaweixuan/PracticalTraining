import React, { Component } from 'react';
import {HashRouter as Router,Route,Switch,Redirect } from 'react-router-dom';

import Mine from '../Mine/Mine';
import Database from '../Database/Database';
import Community from '../Community/Community';
import Collection from '../Mine/Collection';
import Xiangqing from '../Database/Xiangqing';
import Regsiter from '../Register/Register';
import Nomatch from '../Nomatch/Nomatch';
import Denglu from '../Denglu/Denglu';
import Opus from '../Mine/Opus';
import Release from '../Mine/Release';
import Drawing from '../draw/drawing';
import New from '../New';
import Openscreen from '../Openscreen/Openscreen';

class Routes extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path='/' component={Openscreen}/>
					<Route exact path="/database" component={Database}/>
					<Route exact path="/xiangqing" component={Xiangqing}/>
					<Route exact path="/community" component={Community}/>
					<Route exact path="/mine" component={Mine}/>
					<Route exact path="/collection" component={Collection}/>
					<Route exact path="/denglu" component={Denglu}/>
					<Route exact path="/regsiter" component={Regsiter}/>
					<Route exact path='/opus' component={Opus}/>
					<Route exact path='/release' component={Release}/>
					<Route exact path='/draw' component={Drawing}/>
					<Route exact path='/new' component={New}/>
					<Route exact path='/nomatch' component={Nomatch}/>
					{/* <Redirect from='/' to='/openscreen'/> */}
					<Redirect to='/nomatch'/> 
				</Switch>
			</Router>
		)}
}

export default Routes
