import { Flex, WhiteSpace } from 'antd-mobile';
import React, { Component,useState,useEffect } from 'react'
import {HashRouter as Router,Link} from 'react-router-dom';

function PlaceHolder(props,{ className = '', ...restProps }){
	console.log(props.data);
	return (<div className={`${className} placeholder`} {...restProps}>
		{
			props.data.map((item,idx)=>
			<div className="databaseBuju_views">
				<Router>
					<Link to="/xiangqing">
						<canvas className="databaseBuju_views_canvas" id={"canvas"+idx}>
						
						</canvas>
					</Link>
				</Router>
				<div className="databaseBuju_views_bottom">
					<img src="img/mine_message_img.png"/>
				</div>
				
				<div className="databaseBuju_name">xx官方</div>
				<i className='iconfont icon-shoucang1'></i>
				</div>
			)
        }	
	</div>
	)
}

export default function HomeBuju (){
	let [data,setData]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:8080/releases')
        .then(res=>res.json())
        .then(res=>{
            setData(res.content);
			console.log(res.content.length);
			// var aa = res.content.length;
            for(var i=0;i<res.content.length;i++){
                var canvas = document.getElementById('canvas'+i);
                var context=canvas.getContext("2d");
                var a = new window.Picture;
            
                a.prase(res.content[i].paintdata);
				a.drawDataMatrix=a.prase(res.content[i].paintdata);
				a.initWH(canvas.width,canvas.height);
				a.draw(context)
			} 
        })
    },[])
	return(
	<div className="databaseBuju_root">
		<div className="databaseBuju_root_no2">
			<Flex>
				<Flex.Item>
					<PlaceHolder data={data}/>
				</Flex.Item>

				<Flex.Item>
					<PlaceHolder data={data}/>
				</Flex.Item>
			</Flex>
		</div>
	</div>
)
	}