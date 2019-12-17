import React, { Component ,useState,useEffect} from 'react'
import {HashRouter as Router,Link} from 'react-router-dom';
import Undertab from '../undertab/Undertab';
import './Shop.css';
import store from '../store';

export default function Database(props){
    let [data, setData] = useState([]);
    let [jugde,setJugde] = useState(false);
    let arr = [];
    var can = [];
    let userid = store.getState().LoginchangeValueName;
	let flag = store.getState().loginstateflag;
    useEffect(()=>{
        fetch('http://xiawx.top:8080/offpaint')
		.then(res => res.json())
		.then(res => {
            setData(res.content);
        })
    },[])
    useEffect(()=>{
        for (var i = 0; i < data.length; i++) {
            var canvas = can[i];
            var context = canvas.getContext("2d");
            var a = new window.Picture({ col: data[i].col, row: data[i].raw, width: canvas.width, height: canvas.height, context: context });
            a.drawDataMatrix = a.prase(data[i].paintdata);
            a.toColorList();
            a.toNumberDataMatrix();
            a.colorList_abiding=[...a.colorList];
            a.numberDataMatrix_abiding = [...a.numberDataMatrix];
            a.initdata()
            a.drawGreyShadow(context)
        }
    })
    function buynpc(idx){
        if(flag == false){
            setJugde(true);
        }
    }
    function displayjudge(){
        setJugde(false);
    }
    return(
        <div className="shop">
            <div className="shop_navbar">
                <p>商 城</p>
            </div>
            <div className="shop_content">
                {
                    data.map((item, idx) =>
                        <div className="shop_views" key={idx}>
                            <canvas ref={ca => { can[idx] = ca; }} className="shop_views_canvas" id={"canvas" + idx}>

                            </canvas>
                            <div className="shop_money">￥45</div>
                            <button className="shop_buy" onClick={()=>buynpc(idx)}>购买</button>
                        </div>
                    )
                }
            </div>
            <div className="denglu_false" style={{display:jugde?"block":"none"}}>
                    <p>请先登录</p>
                    <div className="denglu_false_but">
                        <button className="denglu_false_but_no1" onClick={displayjudge}>确定</button>
                        <button className="denglu_false_but_no2" onClick={displayjudge}>返回</button>
                        <div className="denglu_clearfloat"></div>
                    </div>
                    
                </div>
                <div className="denglu_shadow" style={{display:jugde?"block":"none"}}></div>
            <div className="none"></div>
            <Undertab flag="4"/>
        </div>
    )
}
