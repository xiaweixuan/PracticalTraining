import React, { Component,useState,useEffect } from 'react'
import { WingBlank, WhiteSpace } from 'antd-mobile';
import {HashRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom'
import './Collection.css'

export default function Release(){
    let [data,setData]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:8080/releases')
        .then(res=>res.json())
        .then(res=>{
            setData(res.content);
            console.log(res.content.length);
            for(var i=0;i<res.content.length;i++){
                var canvas = document.getElementById('canvas'+i);
                var context=canvas.getContext("2d");
                var a = new window.Picture;
            
                a.prase(res.content[i].paintdata);
                a.drawDataMatrix=a.prase(res.content[i].paintdata);
                a.initWH(canvas.width,canvas.height);
                a.draw(context)
                // a.inittable(context)
            }
        })
    },[])

    return(
        <div className="collection">
            <div className="collection_navbar">
                <Link to="/mine" className="collection_navbar_link">
                    <i className="iconfont icon-fanhui"></i>
                </Link>
                
                <div className="collection_navbar_no1"><p>我 的 发 布</p></div>
            </div>
            
            <WhiteSpace size="md" />
            <div className="collection_content_div">
                <WingBlank>
                    {
                        data.map((item,idx)=>
                        <div className="collection_content">
                            <canvas className="collection_content_canvas" 
                            id={"canvas"+idx} width='400px'height='400px'>
                                
                            </canvas>
                        </div>
                        )
                    }
                </WingBlank>
            </div>
        </div>
    )
}