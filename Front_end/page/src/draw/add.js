import React, { Component,useState,useEffect } from 'react'
import {HashRouter as Router,Link} from 'react-router-dom';
import Drawing from '../draw/drawing';
import Torelease from '../draw/toRelease';
export default function Add(props){

    var a = props.location.state.item ;
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
                                <Torelease data={a}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}