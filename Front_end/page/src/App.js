import React, { Component,useState } from 'react';

import './App.css';
import Routes from './routes';
import Drawing from './draw/drawing'

import ColorSelect from './draw/toRelease'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="App">
				<BtnToLxx/>
				{/* <Routes /> */}
				{/* <Drawing /> */}
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




function BtnToLxx(){
	const [btnState,setBtnState]=useState(false)
	var changeBtnState=()=>{
		if(!btnState){
			setBtnState(true);
			
		}else{
			setBtnState(false);
		}
	}
	return (<div className="database_search" onClick={changeBtnState}>搜索</div>)
}
export default App;