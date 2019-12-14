import React, { Component, useState, useEffect } from 'react'
import { WingBlank, WhiteSpace } from 'antd-mobile';
import { HashRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'
import './Collection.css'
import store from '../store';
import { LoginchangeValueName, LoginchangeValuePassword, Motto, ChangeUserid,Email,changeValueeee} from '../actions';
export default function Edit(props) {
    let [olduserid, setOld] = useState(store.getState().LoginchangeValueName);
    let [userid, setUser] = useState(store.getState().ChangeUserid);
    let [pwd, setPwd] = useState(store.getState().LoginchangeValuePassword);
    let [motto, setMotto] = useState(store.getState().Motto);
    let [email, setEmail] = useState(store.getState().Email);
    let [email1, setEmail1] = useState(true);
    let [judge, setJudge] = useState(1);
    let [jugdeemail, setJudgeemail] = useState(1);
    let [pwdold, setPwdold] = useState(true);
    let [pwdold1, setPwdold1] = useState('');
    const [pwdold3, setPwdold3] = useState(true);
    let [btnDisable,setBtnd]=useState(false);
    let [btnContent,setBtnc]=useState('发送验证码');
    let [aac,setAac]=useState('');
    let [time,setTime]=useState(2);
    let [valueeee,setValueeee]=useState(store.getState().changeValueeee);
    console.log(email);
    function useridChange(e) {
        store.dispatch(ChangeUserid(e.target.value))
    }
    function pwdChange(e) {
        store.dispatch(LoginchangeValuePassword(e.target.value))
    }
    function mottoChange(e) {
        store.dispatch(Motto(e.target.value))
    }
    function emailChange(e) {
        store.dispatch(Email(e.target.value))
    }
    function oldPwd(e) {
        setPwdold1(e.target.value);
        console.log(pwdold1);
    }
    function handleChangeeee (e){
        store.dispatch(changeValueeee(e.target.value))
    }
    useEffect(() => {
        store.subscribe(() => {
            setUser(store.getState().ChangeUserid);
            setPwd(store.getState().LoginchangeValuePassword);
            setMotto(store.getState().Motto);
            setEmail(store.getState().Email );
            setValueeee(store.getState().changeValueeee);
        })
    }, [])
    function add() {
        if(pwdold3==false&&pwdold==false){
            return ;
        }
        else if(email1==false&&aac==''){
            return ;
        }
        else if(pwdold1==''&&pwdold==false){
            return ;
        }
        else if(aac!=valueeee&&email1==false){
            var asdasdd = document.getElementsByClassName('edit_asdasdd')
            asdasdd[0].style.display="inline"
            return ;
        }
        else{
            fetch('http://xiawx.top:8080/setall', {
            body: JSON.stringify({
                olduserid: olduserid, userid: userid, pwd: pwd, email: email, avatarurl: 'url', motto: motto
            }),
            method: 'POST',
        })
            .then(res => res.json())
            .then(res => {
                var data = res.content;
                console.log(data);
                if (data == true) {

                    props.history.push('/mine')
                }
            })
        }
         
        store.dispatch(LoginchangeValueName(userid));
    }
    function onblur() {
        fetch('http://xiawx.top:8080/usrcnki?userid=' + userid, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(res => {
                var data = res.content;
                if (userid == '') {
                    setJudge(0);
                }
                else if (userid != '' && data == true) {
                    setJudge(2);
                }
                else if (userid != '' && data == false) {
                    setJudge(3);
                }
            })
    }
    function blur() {
        setPwdold(false);
    }
    function blur1() {
        setEmail1(false);
    }
    function oldblur() {
        fetch('http://xiawx.top:8080/ispwd', {
            body: JSON.stringify({
                userid: olduserid,pwd:pwdold1
            }),
            method: 'POST',
        })
            .then(res => res.json())
            .then(res => {
                console.log(res.content);
                if (res.content==true) {
                    setPwdold3(true);
                }
                else{
                    setPwdold3(false);
                }
            })
        
    }
    function jugdeblankemail(value){
        var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); 
        if(reg.test(value)==false && value == ''){
            setJudgeemail(0);
        }
        else if(reg.test(value)){
            setJudgeemail(2)
        }
        else if(reg.test(value)==false && value != ''){
            setJudgeemail(3)
        }
        else{
            setJudgeemail(1);
        }
    }
    let timeChange;
        let ti = time;
        function clock (){
            if (ti > 0) {
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
            if(email==""){
                var asdasd = document.getElementsByClassName('edit_asdasd')
                asdasd[0].style.display="inline"
            }
            else{
                var asdasd = document.getElementsByClassName('edit_asdasdd')
                asdasd[0].style.display="none"
                let ret = fetch("http://47.97.90.172:8083/?email="+email,{
                    method: 'GET',
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
    return (
        <div className="edit">
            <div className="collection_navbar">
                <Link to="/mine" className="collection_navbar_link">
                    <i className="iconfont icon-fanhui"></i>
                </Link>

                <div className="collection_navbar_no1"><p>编辑个人信息</p></div>
            </div>
            <div className="edit_middle">
                <img className="edit_middle_img" src={"img/mine_message_img.png"} />

                <div className="edit_middle_content">
                    <p>昵称：</p>
                    <input type="text" name="pwd" value={userid} onChange={useridChange} name='userid' onBlur={onblur}></input>
                </div>
                <div className="edit_middle_userid"
                    style={{ display: judge == 3 ? "block" : "none" }}>
                    用户名重复不可用
                </div>
                <div className="edit_middle_userid"
                    style={{ display: judge == 0 ? "block" : "none" }}>
                    用户名不能为空
                </div>
                <div className="edit_middle_content">
                    <p>个性签名：</p>
                    <input type="text" name="motto" value={'个性签名'} value={motto} onChange={mottoChange} name='motto'></input>
                </div>

                <div className="edit_middle_content">
                    <p>密码：</p>
                    <input type="password" name="ispwd" value={pwd} onChange={pwdChange} name='pwd' onFocus={blur}></input>
                </div>

                <div className="edit_middle_content" style={{ display: pwdold ? 'none' : 'block' }}>
                    <p>旧密码：</p>
                    <input type="password" onChange={oldPwd} onBlur={oldblur}></input>
                </div>
                {
                        pwdold3? (
                            <div className="edit_middle_userid"
                                style={{ display: "none" }}>
                                旧密码不正确
                            </div>
                        ) : (
                            <div className="edit_middle_userid"
                                style={{ display: "block" }}>
                                    旧密码不正确
                            </div>
                        )
                    }
                <div className="edit_middle_content">
                    <p>邮箱：</p>
                    <input type="email" name="email" value={email} onChange={emailChange} onFocus={blur1} onBlur={()=>{jugdeblankemail(email)}}></input>
                </div>
                <div className="edit_middle_userid" 
                    style={{display:jugdeemail==0?"block":"none"}}>
                    邮箱不能为空
                </div>
                <div className="edit_middle_userid" 
                    style={{display:jugdeemail==3?"block":"none"}}>
                    邮箱格式不正确
                </div>
                <div className="edit_middle_content" style={{ display: email1 ? 'none' : 'block' }}>
                    <p>验证码:</p>
                    <input type="text" onChange={handleChangeeee}></input>
                    <button type="primary" 
                        className={btnDisable==false?"edit_middle_btn":"edit_middle_btn_false"} inline 
                        onClick={sendCode}
                        disabled={btnDisable}>
                        {btnContent}
                    </button> 
                </div>
                <div className="edit_asdasd"
                    style={{display:"none"}}>
                        邮箱不能为空
                    </div>

                    <div className="edit_asdasdd"
                    style={{display:"none"}}>
                        验证码错误
                    </div>
                               
                <WhiteSpace size="md" />
                <WhiteSpace size="md" />
                <WhiteSpace size="md" />
                <div className="edit_button">
                    <input className="edit_button_save" type="submit" value="保存" onClick={add}></input>
                    <button className="edit_button_return">取消</button>
                </div>
            </div>
        </div>
    )
}
