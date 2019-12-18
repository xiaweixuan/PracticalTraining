import React, { Component } from 'react'
import {HashRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom'
import {WingBlank,WhiteSpace} from "antd-mobile"
import {LoginchangeValueName,LoginchangeValuePassword,loginInput,loginstateflag, ChangeUserid} from '../actions';
import store from '../store';
import './Denglu.css'

export default class Denglu extends Component {
    constructor(){
        super();
        this.state = {
            valueName: store.getState().LoginchangeValueName,
            valuePassword:store.getState().LoginchangeValuePassword,
            flag:store.getState().loginstateflag,
            jugde:false
        }
    }
    componentDidMount() {
        store.subscribe(()=>{
            this.setState({
                valueName: store.getState().LoginchangeValueName,
                valuePassword:store.getState().LoginchangeValuePassword
            })
        })
    }
    handleChangeName = (e)=>{
        store.dispatch(LoginchangeValueName(e.target.value));
        store.dispatch(ChangeUserid(e.target.value))
    }
    handleChangePassword = (e)=>{
        store.dispatch(LoginchangeValuePassword(e.target.value));
    }
    loginInput = ()=>{
        store.dispatch(loginInput(this.state.valueName,this.state.valuePassword));
        fetch('http://xiawx.top:8080/login',{   
            method:'POST',
            body:JSON.stringify({
                userid:this.state.valueName,
                pwd:this.state.valuePassword
            })
        })
        .then(res=>res.json())
        .then((data)=>{
            if(data.content == true){
                this.setState({
                    flag:true
                })
                store.dispatch(loginstateflag(this.state.flag));
                this.props.history.push('/mine');
            }
            else{
                this.setState({
                    jugde:true
                })
            }
        })
    }
    displayjudge=()=>{
        this.setState({
            jugde:false
        })
    }
    render() {
        return (
            <div className="database">
                <div>
                    <div className="xiangqing_header">
                        <div className="denglu_header">
                            登 录
                        </div>
                    </div>
                </div>
                <WingBlank>
                    <WhiteSpace size="lg"/>
                        <input type="text" className="denglu_name"
                         onChange={this.handleChangeName} 
                         name="userid"
                         placeholder="用户名">   
                        </input>
                        <WhiteSpace size="lg"/>
                        <input type="password" className="denglu_psw" 
                        onChange={this.handleChangePassword}
                        placeholder="密码" name="pwd">   
                        </input>
                        <input className="denglu_login" onClick={this.loginInput} 
                        type="submit" value="登 录"></input>
                        <div className="denglu_zhuce">
                            <Link to='/regsiter'>
                                <div className="denglu_zhuce_no2">注册</div>
                            </Link>
                            <Link to='/modify'>
                                <div className="denglu_zhuce_no3">忘记密码</div>
                            </Link>
                            <Link to='/mine'>
                                <div className="denglu_zhuce_no3">取消登录</div>
                            </Link>
                        </div>
                </WingBlank>
                
                <div className="denglu_false" style={{display:this.state.jugde?"block":"none"}}>
                    <p>用户名密码不正确</p>
                    <div className="denglu_false_but">
                        <button className="denglu_false_but_no1" onClick={this.displayjudge}>确定</button>
                        <button className="denglu_false_but_no1" onClick={this.displayjudge}>返回</button>
                        <div className="denglu_clearfloat"></div>
                    </div>
                    
                </div>
                <div className="denglu_shadow" style={{display:this.state.jugde?"block":"none"}}></div>
                
            </div>
        )
    }
}