import React, { useState,useEffect } from 'react'
import {HashRouter as Router,Link} from 'react-router-dom';
import './fly.css';

function PlaceHolder(props,{ className = '', ...restProps }){
	var $ = window.$;
	var can=[];
	$(function () {
		var offset = $("#end").offset();
		// console.log()
		$(".icon-shoucang1").click(function (e) {
			// i++;
			var img = $(this).parent().find("i");
			var flyer = img.clone().addClass("u-flyer");
			flyer.fly({
				start:{
					left: e.clientX,
					top: e.clientY
				},
				end:{
					left: offset.left + 10,
                    top: offset.top + 10,
                    width: 0,
                    height: 0
				},
				onEnd: function(){
					$(".msg").show().animate({width: '70vw'}, 200).fadeOut(1000);
					flyer.remove();
				}
			})
			$(this).css({"cursor":"pointer", "color":"#FF7414" }).unbind('click');
		});
	});
	useEffect(()=>{
		// console.log(props.data)
		for(var i=0;i<props.data.length;i++){
			if(props.data[i].type==props.type.type){
				var canvas = can[i];
				// console.log(can[i]);
				var context=canvas.getContext("2d");
				console.log(props.data[i].col,props.data[i].row)
				var a = new window.Picture({col:props.data[i].col,row:props.data[i].raw,width:canvas.width,height:canvas.height,context:context});	
				// a.prase(props.data[i].paintdata);
				a.drawDataMatrix=a.prase(props.data[i].paintdata);
				a.draw(context)
			}
			else if(props.type.type == "推荐"){
				var canvas = can[i];
				// console.log(can[i]);
				var context=canvas.getContext("2d");
				var a = new window.Picture({col:props.data[i].col,row:props.data[i].raw,width:canvas.width,height:canvas.height,context:context});	
				a.prase(props.data[i].paintdata);
				a.drawDataMatrix=a.prase(props.data[i].paintdata);
				a.draw(context)
			}
		}
		 

	})
	return (
	<div className={`${className} placeholder`} {...restProps}>
		{
			props.data.map((item,idx)=>
			<div className="databaseBuju_views" key={idx}>
				<Link to={{pathname:"/xiangqing",state:{item}}}>
					<canvas ref={ca=>{can[idx]=ca;}} className="databaseBuju_views_canvas" id={"canvas"+idx}>
						
					</canvas>
				</Link>
				
				<div className="databaseBuju_views_bottom">
					<img src="img/mine_message_img.png"/>
				</div>
				
				<div className="databaseBuju_name">xx官方</div>
				<a><i className='iconfont icon-shoucang1'></i></a>

				<div className="m-sidebar">
					<div className="cart">
						<i id="end"></i>
						<span>我的收藏</span>
					</div>
				</div>
				
			</div>
			)
		}
		
		<div className="none"></div>	
		</div>

	)
}

export default function HomeBuju (props){
	let [data,setData]=useState([]);
	let [data1,setData1]=useState([]);
	var data2=0;
	let type=props;
	// console.log(props);
    useEffect(()=>{
        fetch('http://xiawx.top:8080/offpaint')
        .then(res=>res.json())
        .then(res=>{
			for(var i=0;i<res.content.length;i++){
				// console.log(res.content)
				if(res.content[i].type==type.type){
					data1[data2]=res.content[i];
					data2++;
				}
				else if(type.type == "推荐"){
					data1[data2]=res.content[i];
					data2++;
				}
			}
			setData1(data1);
			setData(data1);
			 
		})
	},[])
	return(
		<div className="databaseBuju_root">
			<div className="databaseBuju_root_no2">
				<div>
					<div>
						<PlaceHolder data={data} type={type}/>
					</div>
				</div>
			</div>
		</div>
	)
}