import React, { Component, useState, useEffect } from 'react'
import { WingBlank, WhiteSpace } from 'antd-mobile';
import {Link} from 'react-router-dom'
import './Collection.css'
import store from '../store';
import { LoginchangeValueName, LoginchangeValuePassword, Motto, ChangeUserid} from '../actions';
export default function Edit(props) {
    let [olduserid, setOld] = useState(store.getState().LoginchangeValueName);
    let [userid, setUser] = useState(store.getState().ChangeUserid);
    let [pwd, setPwd] = useState(store.getState().LoginchangeValuePassword);
    let [motto, setMotto] = useState(store.getState().Motto);
    let [judge, setJudge] = useState(1);
    let [pwdold, setPwdold] = useState(true);
    let [pwdold1, setPwdold1] = useState('');
    const [pwdold3, setPwdold3] = useState(false);
    console.log(motto);
    function useridChange(e) {
        store.dispatch(ChangeUserid(e.target.value))
    }
    function pwdChange(e) {
        store.dispatch(LoginchangeValuePassword(e.target.value))
    }
    function mottoChange(e) {
        store.dispatch(Motto(e.target.value))
    }
    function oldPwd(e) {
        setPwdold1(e.target.value);
        console.log(pwdold1);
    }
    useEffect(() => {
        store.subscribe(() => {
            setUser(store.getState().ChangeUserid);
            setPwd(store.getState().LoginchangeValuePassword);
            setMotto(store.getState().Motto);
        })
    }, [])
    function add() {
        if(pwdold3==false&&pwdold==false){
            return ;
        }
        else{
            fetch('http://xiawx.top:8080/setall', {
            body: JSON.stringify({
                olduserid: olduserid, userid: userid, pwd: pwd, email: '2916244782@qq.com', avatarurl: 'url', motto: motto
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
                    {
                        pwdold3 ? (
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
                </div>
                <div className="edit_middle_content">
                    <p>邮箱：</p>
                    <input type="email" name="email" value={'邮箱'}></input>
                </div>
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
