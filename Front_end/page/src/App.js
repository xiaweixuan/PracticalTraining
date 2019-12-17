import React, { Component} from 'react';

import './App.css';
import Routes from './routes';
import Drawing from './draw/drawing'

import ToRelease from './draw/toRelease'
import Npc from './npc/npc'
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="App">
				<Routes />
				{/* <Npc/> */}
			</div>
		)
	}
}




export default App;