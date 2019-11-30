import React, { Component } from 'react';

import './App.css';
import Routes from './routes';
import R from './draw/ToRelease'
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render(){
		return (
			<div className="App">
				<R/>
				{/* <Routes /> */}
			</div>
		)}
	}
export default App;