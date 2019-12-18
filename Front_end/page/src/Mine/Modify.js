import React, { Component, useState, useEffect,useRef } from 'react'
import { WingBlank, WhiteSpace } from 'antd-mobile';
import { HashRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'
import './Collection.css'
import store from '../store';
export default function Edit(props) {
    let [usern,setUsern] = useState("");
    let [usere,setUsere] = useState("");
    let [userp,setUserp] = useState("");
    // 判断用户名是否为空 0为空 1默认 2正确
    let [jugdename,setJugdename] = useState(1);
    let [jugdepwd,setJugdepwd] = useState(1);
    // 判断email是否为空 0为空 1默认 2正确 3格式不正确 4不匹配
    let [jugdeemail,setJugdeemail] = useState(1);
    let [jugdecode,setJugdecode] = useState(1);
    let username = null;
    let useremail = null;
    let usercode = null;
    let userpwd = null;
    let ee = "";
    let [btnDisable,setBtnd]=useState(false);
    let [btnContent,setBtnc]=useState('发送验证码');
    let [aac,setAac]=useState('');
    let [time,setTime]=useState(2);
    function nameonblur(){
        setUsern(username.value);
        if(username.value == ""){
            setJugdename(0);
        }
        else{
            setJugdename(2);
        }
    }
    function emailonblur(){
        var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); 
        ee=useremail.value;
        if(useremail.value == "" && reg.test(useremail.value)==false){
            setJugdeemail(0);
        }
        else if(useremail.value != "" && reg.test(useremail.value)==false){
            setJugdeemail(3);
        }
        else{
            let url = 'http://xiawx.top:8080/personal?userid='+usern;
            // console.log(url);
            fetch(url)
            .then(res=>res.json())
            .then(res=>{
                // console.log(res.content[0].email);
                setUsere(res.content[0].email);
                // console.log(useremail.value);
                if(ee != res.content[0].email){
                    setJugdeemail(4);
                }
                else{
                    setJugdeemail(2);
                }
            })
        }
    }
    let timeChange;
    let ti = time;
    function clock (){
        if (ti > 0){
            ti = ti - 1;
            setTime(ti);
            setBtnc("已发送"+ti+ "秒");
        }
        else{
            clearInterval(timeChange);
            setBtnd(false);
            setTime(2);
            setBtnc("发送验证码");
        }
    }
    let aka="";
    function sendCode (){
        if(jugdename == 1){
            setJugdename(0);
        }
        if(jugdeemail == 1){
            setJugdeemail(0);
        }
        if(jugdename==2 && jugdeemail == 2){
            let ret = fetch("http://47.97.90.172:8083/?email="+usere,{
                method: 'GET'
            })
            .then(res=>res.json())
            .then(res=>{
                aka = res.content;
                setAac(aka);
            })
            setBtnd(true);
            timeChange = setInterval(clock,1000);
        }
    }
    function pwdonblur(){
        setUserp(userpwd.value);
        if(userpwd.value == ""){
            setJugdepwd(0);
        }
        else{
            setJugdepwd(2);
        }
    }
    function determine(){
        // console.log("userp",userp);
        if(aac != "" && aac==usercode.value){
            setJugdecode(2);
            if(jugdename==2 && jugdeemail==2 && jugdepwd==2&&jugdecode==2){
                fetch('http://xiawx.top:8080/setpwd', {
                    body: JSON.stringify({userid:usern,
                        pwd:userp}),
                        method: 'POST',
                    })
                    .then(res=>res.json())
                    .then(res=>{
                        var data=res.content;
                        // console.log(data);
                        if(data==true){
                            props.history.push('/denglu')
                        }
                    })
            }
        }
        else if(aac != "" &&aac!=usercode.value){
            setJugdecode(3);
            if(jugdename==1){
                setJugdename(0);
            }
            if(jugdeemail==1){
                setJugdeemail(0);
            }
            if(jugdepwd==1){
                setJugdepwd(0);
            }
        }
        else{
            if(this.state.jugdename==1){
                this.setState({jugdename:0})
            }
            if(this.state.jugdeemail==1){
                this.setState({jugdeemail:0})
            }
            if(this.state.jugdepwd==1){
                this.setState({jugdepwd:0})
            }
            if(this.state.jugdecode==1){
                this.setState({jugdecode:0})
            }
        }
    }
    return(
        <div className="edit">
            <div className="collection_navbar">
                <Link to="/mine" className="collection_navbar_link">
                    <i className="iconfont icon-fanhui"></i>
                </Link>
                <div className="collection_navbar_no1">
                    <p>忘记密码</p>
                </div>
            </div>
            <div className="edit_middle">
                <div className="edit_middle_content">
                    <p>昵称：</p>
                    <input type="text" 
                    name='userid'
                    ref={(name) => { username = name; }} 
                    onBlur={nameonblur}></input>
                </div>
                <div className="edit_middle_userid" 
                    style={{display:jugdename==0?"block":"none"}}>
                        昵称不能为空
                </div> 
                <div className="edit_middle_content">
                    <p>邮箱：</p>
                    <input type="email" 
                        name="email" 
                        ref={(email) => { useremail = email; }} 
                        onBlur={emailonblur}
                        ></input>
                </div> 
                <div className="edit_middle_userid" 
                    style={{display:jugdeemail==0?"block":"none"}}>
                    邮箱不能为空
                </div>  
                <div className="edit_middle_userid" 
                    style={{display:jugdeemail==4?"block":"none"}}>
                    邮箱和用户名不匹配
                </div>  
                <div className="edit_middle_userid" 
                    style={{display:jugdeemail==3?"block":"none"}}>
                    邮箱格式不正确
                </div>
                <div className="edit_middle_content">
                    <p>验证码:</p>
                    <input type="text" 
                     ref={(code) => { usercode = code; }} 
                    ></input>
                    <button type="primary" 
                        className={btnDisable==false?"edit_middle_btn":"edit_middle_btn_false"} inline 
                        onClick={sendCode}
                        disabled={btnDisable}
                    >
                        {btnContent}
                    </button> 
                </div>
                <div className="edit_middle_userid" 
                    style={{display:jugdecode==0?"block":"none"}}>
                    验证码不能为空
                </div>
                <div className="edit_middle_userid" 
                    style={{display:jugdecode==3?"block":"none"}}>
                    验证码错误
                </div>
                <div className="edit_middle_userid" 
                    style={{display:jugdecode==4?"block":"none"}}>
                    邮箱为空
                </div>
                    <div className="edit_middle_content">
                    <p>密码：</p>
                    <input type="password" 
                    name='pwd' 
                    ref={(pwd) => { userpwd = pwd; }} 
                    onBlur={pwdonblur}
                    ></input>
                </div>
                <div className="edit_middle_userid" 
                    style={{display:jugdepwd==0?"block":"none"}}>
                        密码不能为空
                </div>
                <WhiteSpace size="md" />
                <WhiteSpace size="md" />
                <WhiteSpace size="md" />
                <div className="edit_button">
                    <input className="edit_button_save" 
                    type="submit" 
                    value="确定" 
                    onClick={determine}
                    ></input>
                    <Link to="/denglu" className="edit_button_return">取消</Link>
                </div>
            </div>
        </div>
    )
}