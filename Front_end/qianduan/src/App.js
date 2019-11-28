import React, { Component } from 'react';

import './App.css';
import Routes from './routes';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		// console.log(window.Picture;
	}
	render(){
		return (
			<div className="App">
				<Routes />
			</div>
		)}
	}
export default App;