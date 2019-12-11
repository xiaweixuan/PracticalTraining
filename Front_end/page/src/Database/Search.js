import React, { Component,useState,useEffect } from 'react'
import { WingBlank, WhiteSpace } from 'antd-mobile';
import {HashRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom'
import '../Mine/Collection.css'
import store from '../store';

export default function Search(){
    let [value,setValue]=useState(store.getState().Search);
    console.log(value);
    let [data,setData]=useState([]);
    let [data1,setData1]=useState([]);
    var data2=0;
    useEffect(()=>{
        fetch('http://xiawx.top:8080/offpaint')
        .then(res=>res.json())
        .then(res=>{
            setData(res.content);
            for(var i=0;i<res.content.length;i++){
                if(res.content[i].describe.indexOf(value)!=-1){
                    console.log(res.content[i].describe);
					data1[data2]=res.content[i];
                    data2++;
				}
            }
            setData(data1);
            console.log(data1);
        })
    },[])
    useEffect(()=>{
		for(var i=0;i<data1.length;i++){
            var canvas = document.getElementById('canvas'+i);
            var context=canvas.getContext("2d");
            var a = new window.Picture({col:data1[i].col,row:data1[i].raw,width:canvas.width,height:canvas.height,context:context});			 
            a.drawDataMatrix=a.prase(data1[i].paintdata);
            a.draw(context)
        }
        setData(data1);
    })
    return(
        <div className="collection">
            <div>
            <div className="collection_navbar">
                <Link to="/database" className="collection_navbar_link">
                    <i className="iconfont icon-fanhui"></i>
                </Link>
                
                <div className="collection_navbar_no1"><p>搜索</p></div>
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
            <div className="none_div"></div>
        </div>
    )
}