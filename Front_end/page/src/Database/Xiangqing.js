import React, { Component,useState,useEffect } from 'react'
import {HashRouter as Router,Link} from 'react-router-dom';
import Drawing from '../draw/drawing';

export default function Xiangqing(props){
    var a = props.location.state.item ;
    var b=props.history;
    return(
        <div className="database">
            <div>
                <div className="xiangqing_header">
                    <Link to='/database' className="xiangqing_header_i">
                        <i className="iconfont icon-fanhui"></i>
                    </Link>
                </div>
            </div>
            
            <div className="xiangqing_zhong">
                <div className="xiangqing_xinxi">
                    <div className="xiangqing_touxiang">
                        <img src="img/mine_message_img.png"/>
                    </div>
                    <div className="xiangqing_name">
                        {props.location.state.item.userid}
                    </div>
                </div>
                <div className="xiangqing_zuoping">
                    <div>
                        <div>
                            <Drawing data={a} history={b}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}