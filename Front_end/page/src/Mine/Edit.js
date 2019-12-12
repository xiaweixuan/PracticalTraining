import React, { Component,useState,useEffect } from 'react'
import { WingBlank, WhiteSpace } from 'antd-mobile';
import {HashRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom'
import './Collection.css'
import store from '../store';
import {LoginchangeValueName,changeValuee} from '../actions';
export default function Edit(){
    let [data,setData]=useState([]);
    let [userid,setUser] = useState(store.getState().LoginchangeValueName);
    let [pwd,setPwd]=useState(store.getState().changeValuee);
    function useridChange(e){
        store.dispatch(LoginchangeValueName(e.target.value))
    }
    function pwdChange(e){
        store.dispatch(changeValuee(e.target.value))
    }
    useEffect(()=>{
        store.subscribe(()=>{
            setUser(store.getState().LoginchangeValueName);
            setPwd(store.getState().changeValuee);
        })
    },[])
    function add(){
        console.log(store.getState().LoginchangeValueName);
        console.log(store.getState().changeValuee);
    }
    return(
        <div className="edit">
            <div className="collection_navbar">
                <Link to="/mine" className="collection_navbar_link">
                    <i className="iconfont icon-fanhui"></i>
                </Link>
                
                <div className="collection_navbar_no1"><p>编辑个人信息</p></div>
            </div>
            <div className="edit_middle">
                <img className="edit_middle_img" src={"img/mine_message_img.png"}/>
                <WhiteSpace size="md"/>
                
                <div className="edit_middle_content">
                    <p>昵称：</p>
                    <input type="text" name="pwd" value={userid} onChange={useridChange}></input>
                </div>
                <WhiteSpace size="md"/>
                <div className="edit_middle_content">
                    <p>个性签名：</p>
                    <input type="text" name="motto" value={'个性签名'}></input>
                </div>
                <WhiteSpace size="md"/>
                <div className="edit_middle_content">
                    <p>密码：</p>
                    <input type="password" name="ispwd" value={pwd} onChange={pwdChange}></input>
                </div>
                <WhiteSpace size="md"/>
                <div className="edit_middle_content">
                    <p>旧密码：</p>
                    <input type="password" name="pwd" ></input>
                </div>
                <WhiteSpace size="md"/>
                <div className="edit_middle_content">
                    <p>邮箱：</p>
                    <input type="email" name="email" value={'邮箱'}></input>
                </div>
                <WhiteSpace size="md"/>
                <WhiteSpace size="md"/>
                <div className="edit_button">
                    <input className="edit_button_save" type="submit" value="保存" onClick={add}></input>
                    <button className="edit_button_return">取消</button>
                </div>
            </div>
        </div>
    )
}
