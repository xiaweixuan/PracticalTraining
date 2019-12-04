import React, { Component,useState,useEffect } from 'react'
import {HashRouter as Router,Link} from 'react-router-dom';
import Drawing from '../draw/drawing';

export default function Xiangqing(props){
    // let [data,setData]=useState([]);
    // useEffect(()=>{
    //     console.log(new window.Picture);
        
    //     fetch('http://localhost:8080/releases')
    //     .then(res=>res.json())
    //     .then(res=>{
    //         setData(res.content);
    //         var canvas = document.getElementById('canvas');
    //             var context=canvas.getContext("2d");
    //             var a = new window.Picture;
                
    //             a.prase(res.content[1].paintdata);
    //             a.drawDataMatrix=a.prase(res.content[1].paintdata);
    //             a.initWH(canvas.width,canvas.height);
    //             a.draw(context)
    //         })
    //     },[])

    var a = props.location.state.item.paintdata;
    // console.log(a)
        return (
            <div className="database">
                <div>
                    <div className="xiangqing_header">
                        <Link to='/database' className="xiangqing_header_i">
                            <i className="iconfont icon-fanhui"></i>
                        </Link>
                        
                        <div className="xiangqing_header_i_no2">
                            <i className="iconfont icon-shoucang1"></i>
                        </div>
                        {/* <div>
                            <button className="xiangqing_header_done">完 成</button>
                        </div> */}
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
                                {/* <canvas className="xiangqing_zuoping_canvas" id={"canvas"} width='100%'height='100%'>

                                </canvas> */}
                                <Drawing data={a}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}