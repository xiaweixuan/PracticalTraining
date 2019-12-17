import React, { Component,useState,useEffect } from 'react'
import { WingBlank, WhiteSpace } from 'antd-mobile';
import {Link} from 'react-router-dom'
import './Collection.css'
import store from '../store';

export default function Release(){
    let [data,setData]=useState([]);
    let userid = store.getState().LoginchangeValueName;
    useEffect(()=>{
        let url = 'http://xiawx.top:8080/perput?userid='+userid;
        fetch(url)
        .then(res=>res.json())
        .then(res=>{
            setData(res.content);
            for(var i=0;i<res.content.length;i++){
                var canvas = document.getElementById('canvas'+i);
                var context=canvas.getContext("2d");
                var a = new window.Picture({col:res.content[i].col,row:res.content[i].raw,width:canvas.width,height:canvas.height,context:context});			 
				a.drawDataMatrix=a.prase(res.content[i].paintdata);
				a.draw(context)
            }
        })
    },[])
    function del(paintid){
        let url = 'http://xiawx.top:8080/delefabu?paintid='+paintid;
        fetch(url)
        .then(res=>res.json())
        .then(res=>{
             if(res.content==true){
                let url = 'http://xiawx.top:8080/perput?userid='+userid;
                fetch(url)
                .then(res=>res.json())
                .then(res=>{
                    setData(res.content);
                    for(var i=0;i<res.content.length;i++){
                        var canvas = document.getElementById('canvas'+i);
                        var context=canvas.getContext("2d");
                        var a = new window.Picture({col:res.content[i].col,row:res.content[i].raw,width:canvas.width,height:canvas.height,context:context});			 
                        a.drawDataMatrix=a.prase(res.content[i].paintdata);
                        a.draw(context)
                    }
                })
             }
        })
    }
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
                            <Link to={{pathname:"/xiangqing",state:{item}}}>
                                <canvas className="collection_content_canvas" 
                                id={"canvas"+idx} width='400px'height='400px'>
                                </canvas>
                            </Link>
                            <button className="collection_content_delete" onClick={()=>del(item.paintid)}>删除</button>
                        </div>
                        )
                    }
                </WingBlank>
            </div>
            <div className="none_div"></div>
        </div>
    )
}