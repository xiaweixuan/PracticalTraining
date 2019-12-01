import React, { Component } from 'react';

import './App.css';
import Routes from './routes';
import Drawing from './draw/drawing'

import ColorSelect from './draw/toRelease'


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		// console.log(window.Picture;
	}
	render() {
		return (
			<div className="App">
				{/* <Routes /> */}
				<Drawing />
				{/* <ColorSelect
					style={{ verticalAlign: "middle" }}
					color={useContent[key].color} //编辑的时候，用于颜色的回显
					objKey={key} //因页面多次使用，传入key值，用于区分色块更新，因key是关键字，这里使用了objKey作为属性名                                                                          
					updateColor={this.updateColor} /> */}
				{/* <Palette/> */}
			</div>
		)
	}
}
export default App;