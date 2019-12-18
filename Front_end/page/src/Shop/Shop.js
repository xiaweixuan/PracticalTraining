import React, { Component ,useState,useEffect} from 'react'
import Undertab from '../undertab/Undertab';
import './Shop.css';
import store from '../store';
import Npc from '../npc/Npc'
import Npcsay from '../npcsay/Npcsay'
import {Npcid} from '../actions';
import {Link} from 'react-router-dom'
export default function Database(props){
    let [data, setData] = useState([]);
    let [jugde,setJugde] = useState(false);
    let arr = [];
    var can = [];
    let userid = store.getState().LoginchangeValueName;
    let flag = store.getState().loginstateflag;
    useEffect(()=>{
        fetch('http://xiawx.top:8080/shownpc')
		.then(res => res.json())
		.then(res => {
            setData(res.content);
        })
    },[])
    useEffect(()=>{
        for(var i = 0; i < data.length; i++){
            var canvas = can[i];
            var context = canvas.getContext("2d");
            var a = new window.Picture({col:data[i].col,row:data[i].raw,width:canvas.width,height:canvas.height,context:context});
            a.drawDataMatrix=a.prase(data[i].paintdata);
            a.draw(context);
        }
    })
    
    function buynpc(idx,item){
        console.log(item);
        store.dispatch(Npcid(item))
        console.log(store.getState());
        if(flag==false){
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

                        <canvas ref={ca => { can[idx] = ca; }}
                        className="shop_views_canvas"
                        id={"canvas"+idx}>
                        
                        </canvas>
                        {/* <div className="shop_money">￥45</div> */}

                        <button className="shop_buy" 
                        onClick={()=>buynpc(idx,item)}>使用</button>
        
                    </div>
                    )
                }
            </div>

            <div className="denglu_false" 
            style={{display:jugde?"block":"none"}}>
                <p>请先登录</p>
                <div className="denglu_false_but">
                    <Link to="/denglu"> 
                        <button className="denglu_false_but_no1" 
                        onClick={displayjudge}>确定</button>
                    </Link>
                    <Link to="/mine">
                        <button className="denglu_false_but_no2" 
                        onClick={displayjudge}>返回</button>
                    </Link>
                    <div className="denglu_clearfloat"></div>
                </div>
            </div>
            
            <div className="denglu_shadow" 
            style={{display:jugde?"block":"none"}}></div>
            <div className="none"></div>
            <Npcsay/>
            <Npc />
            <Undertab flag="4"/>
        </div>
    )
}