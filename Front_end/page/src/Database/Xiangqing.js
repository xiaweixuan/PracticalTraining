import React, { Component,useState,useEffect } from 'react'
import {HashRouter as Router,Link} from 'react-router-dom';

export default function Xiangqing(){
    let [data,setData]=useState([]);
    useEffect(()=>{
        console.log(new window.Picture);
        
        fetch('http://localhost:8080/releases')
        .then(res=>res.json())
        .then(res=>{
            setData(res.content);
            var canvas = document.getElementById('canvas');
                var context=canvas.getContext("2d");
                var a = new window.Picture;
                
                a.prase(res.content[1].paintdata);
                a.drawDataMatrix=a.prase(res.content[1].paintdata);
                a.initWH(canvas.width,canvas.height);
                a.draw(context)
            })
        },[])
        return (
            <div className="database">
                <div>
                    <div className="xiangqing_header">
                        <Router>
                            <Link to='/' className="xiangqing_header_i">
                                <i className="iconfont icon-fanhui"></i>
                            </Link>
                        </Router>
                        <div className="xiangqing_header_i_no2">
                            <i className="iconfont icon-shoucang1"></i>
                        </div>
                        <div>
                            <button className="xiangqing_header_done">完 成</button>
                        </div>
                    </div>
                </div>
                <div className="xiangqing_zhong">
                    <div className="xiangqing_xinxi">
                        <div className="xiangqing_touxiang">
                            <img src="img/mine_message_img.png"/>
                        </div>
                        <div className="xiangqing_name">
                            xx官方
                        </div>
                    </div>
                    <div className="xiangqing_zuoping">
                        <div>
                            <div>
                                <canvas className="xiangqing_zuoping_canvas" id={"canvas"} width='100%'height='100%'>

                                </canvas>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xiangqing_bottom">
                    <div className="xiangqing_bottom_1">1</div>
                    <div className="xiangqing_bottom_1">1</div>
                    <div className="xiangqing_bottom_1">1</div>
                    <div className="xiangqing_bottom_1">1</div>
                </div>
            </div>
        )
}