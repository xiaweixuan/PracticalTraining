import React, { Component } from 'react'
import { WingBlank, WhiteSpace } from 'antd-mobile';
import {HashRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom'
import './Collection.css'

export default function Collection(){
    return(
        <div className="collection">
            <div className="collection_navbar">
                <Link to="/mine" className="collection_navbar_link">
                    <i className="iconfont icon-fanhui"></i>
                </Link>
                
                <div className="collection_navbar_no1"><p>我 的 收 藏</p></div>
            </div>
            
            <WhiteSpace size="md" />
            <div className="collection_content_div">
                <WingBlank>
                    <div className="collection_content">
                        <canvas className="collection_content_canvas">
                            
                        </canvas>
                    </div>
                    <div className="collection_content">
                        <canvas className="collection_content_canvas">
                            
                        </canvas>
                    </div>
                    <div className="collection_content">
                        <canvas className="collection_content_canvas">
                        
                        </canvas>
                    </div>
                    <div className="collection_content">
                        <canvas className="collection_content_canvas">
                            
                        </canvas>
                    </div>
                </WingBlank>
            </div>
        </div>
    )
}