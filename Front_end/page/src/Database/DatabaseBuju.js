import React, { useState, useEffect } from 'react'
import { HashRouter as Router, Link } from 'react-router-dom';
import store from '../store';

function PlaceHolder(props, { className = '', ...restProps }) {
	var can = [];
	let userid = store.getState().LoginchangeValueName;
	let flag = store.getState().loginstateflag;
	var [data, setData] = useState([]);
	
	useEffect(() => {
		setData(props.data);
		for (var i = 0; i < data.length; i++) {
			if (data[i].type == props.type) {
				var canvas = can[i];
				var context = canvas.getContext("2d");
				var a = new window.Picture({
					col: data[i].col,
					row: data[i].raw,
					width: canvas.width,
					height: canvas.height,
					context: context });
					a.drawDataMatrix = a.prase(data[i].paintdata);
					a.toColorList();
					a.toNumberDataMatrix();
					a.colorList_abiding=[...a.colorList];
					a.numberDataMatrix_abiding = [...a.numberDataMatrix];
					a.initdata()
					a.drawGreyShadow(context)
				}
				else if (props.type == "推荐") {
					var canvas = can[i];
					var context = canvas.getContext("2d");
					var a = new window.Picture({
						col: data[i].col,
						row: data[i].raw,
						width: canvas.width,
						height: canvas.height,
						context: context });
						a.drawDataMatrix = a.prase(data[i].paintdata);
						a.toColorList();
						a.toNumberDataMatrix();
						a.colorList_abiding=[...a.colorList];
						a.numberDataMatrix_abiding = [...a.numberDataMatrix];
						a.initdata()
						a.drawGreyShadow(context)
					}
				}
			})
	
			function judgecollection(item, idx) {
				if(flag){
					fetch('http://xiawx.top:8080/addcollect', {
						method: 'POST',
						body: JSON.stringify({
							userid: userid,
							paintid: item.paintid
						})
					})
					.then(res => res.json())
					.then(res => {
						var d = data.map((item,i)=>{
							if(i === idx){
								item.iscollect = !item.iscollect;
								return item;
							}
							return item
						})
						setData(d);
					})
				}
			}
			return (
				<div className={`${className} placeholder`} {...restProps}>
					{
						data.map((item, idx) =>
						<div className="databaseBuju_views" key={idx}>
							<Link to={{ pathname: "/xiangqing", state: { item } }}>
								<canvas ref={ca => { can[idx] = ca; }}
								className="databaseBuju_views_canvas"
								id={"canvas" + idx}>
									
								</canvas>
							</Link>
							<div className="databaseBuju_views_bottom">
								<img src="http://47.97.90.172:8095/x5.png" />
							</div>
							
							<div className="databaseBuju_name">童画官方</div>
							<a>
								<i className='iconfont icon-shoucang1'
								onClick={() => judgecollection(item, idx)}
								style={{ color: item.iscollect ? "rgb(237,143,68)" : "black" }}>
								</i>
							</a>
						</div>
					)
				}
			<div className="none1"></div>
		</div>
	)
}

export default function HomeBuju(props) {
	let [data, setData] = useState([]);
	let [data1, setData1] = useState([]);
	var data2 = 0;
	
	return (
		<div className="databaseBuju_root">
			<div className="databaseBuju_root_no2">
				<div>
					<div>
						<PlaceHolder data={props.data} type={props.type} />
					</div>
				</div>
			</div>
		</div>
	)
}