import React, { Component } from 'react'
import {HashRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom'
import {WingBlank,WhiteSpace} from "antd-mobile"
import {LoginchangeValueName,LoginchangeValuePassword,loginInput} from '../actions';

import store from '../store';
import './Denglu.css'
export default class Denglu extends Component {
    constructor(){
        super();
        this.state = {
            valueName: store.getState().LoginchangeValueName,
            valuePassword:store.getState().LoginchangeValuePassword
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
        store.dispatch(LoginchangeValueName(e.target.value))
    }
    handleChangePassword = (e)=>{
        store.dispatch(LoginchangeValuePassword(e.target.value))
    }
    loginInput = ()=>{
        store.dispatch(loginInput(this.state.valueName,this.state.valuePassword));
        console.log(store.getState().login);
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
                    {/* <form >  */}
                    <WhiteSpace size="lg"/>
                        <input type="text" className="denglu_name"
                         onChange={this.handleChangeName} value={this.state.valueName}  
                         name="userid">   
                        </input>
                        <WhiteSpace size="lg"/>
                        <input type="text" className="denglu_name" 
                        onChange={this.handleChangePassword} value={this.state.valuePassword} 
                        placeholder="密码" name="pwd">   
                        </input>
                        <input className="denglu_login" onClick={this.loginInput} 
                        type="submit" value="登 录"></input>

                        <div className="denglu_zhuce">
                            <Link to='/regsiter'>
                                <div className="denglu_zhuce_no2">注册</div>
                            </Link>
                            <Link to='/regsiter'>
                                <div className="denglu_zhuce_no3">忘记密码</div>
                            </Link>
                            <Link to='/mine'>
                                <div className="denglu_zhuce_no3">取消登录</div>
                            </Link>
                        </div>
                    {/* </form> */}
                </WingBlank>
            </div>
        )
    }
}