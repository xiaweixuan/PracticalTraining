import React, { useState,useEffect } from 'react'
import {HashRouter as Router,Link} from 'react-router-dom';
import './fly.css';

function PlaceHolder(props,{ className = '', ...restProps }){
	var $ = window.$;
	// var i = 0;
	$(function () {
		var offset = $("#end").offset();
		console.log()
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
	return (
	<div className={`${className} placeholder`} {...restProps}>
		{
			props.data.map((item,idx)=>
			<div className="databaseBuju_views" key={idx}>
				<Link to={{pathname:"/xiangqing",state:{item}}}>
					<canvas className="databaseBuju_views_canvas" id={"canvas"+idx}>
						
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

export default function HomeBuju (){
	let [data,setData]=useState([]);
    useEffect(()=>{
        fetch('http://xiawx.top:8080/offpaint')
        .then(res=>res.json())
        .then(res=>{
            setData(res.content);
			console.log(res.content.length);
			var aa = res.content.length;
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
				<div>
					<div>
						<PlaceHolder data={data}/>
					</div>
				</div>
			</div>
		</div>
	)
}