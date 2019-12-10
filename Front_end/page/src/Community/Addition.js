import React, { Component,useState,useEffect } from 'react'
import {HashRouter as Router,Route,Link,Redirect,Switch,useHistory} from 'react-router-dom'
import { WingBlank, WhiteSpace } from 'antd-mobile';
import './Addition.css'

export default function Addition(){    
    return(
        <div className="addition_div_no1">
            <div className="addition_navbar">
                <p>发 布</p>
            </div>

            <WingBlank className="addition_wingblank">
                <div className="addition_div_no2">
                    <div className="addition_file">
                        <p>+上传你的作品</p>
                        <input type="file" id="file" multiple size="80"/>
                    </div>
                    <p className="addition_p">作品介绍：</p>
                    <input className="addition_text" type="text"></input>
                    <Link to="/community" className="addition_botton_1">发布</Link>
                    <Link to="/community" className="addition_botton_2">取消发布</Link>
                </div>
            </WingBlank>
        </div>
    )
}