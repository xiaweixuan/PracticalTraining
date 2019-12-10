import React, { Component,useState,useEffect } from 'react'
import { WingBlank, WhiteSpace } from 'antd-mobile';
import {HashRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom'
import './Collection.css'
import store from '../store';
import {loginstateflag} from '../actions';

export default function Setup(props){
    function signout(){
        store.dispatch(loginstateflag(false));
        props.history.push('/mine');
    }
    return(
        <div className="setup">
            <div className="collection_navbar">
                <Link to="/mine" className="collection_navbar_link">
                    <i className="iconfont icon-fanhui"></i>
                </Link>
                
                <div className="collection_navbar_no1"><p>设 置</p></div>
            </div>
            <input className="register_content_finish" onClick={signout} type="submit" value="退出登录" style={{marginTop: "17vw"}}></input>
        </div>
    )
}