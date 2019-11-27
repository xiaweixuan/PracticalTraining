import React, { Component } from 'react'
import {HashRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom'
import { WingBlank, WhiteSpace } from 'antd-mobile';
import store from '../store';
import {changeValue,changeValuee} from '../actions';
import './Register.css'

export default class Register extends Component {
    constructor(){
        super();
        this.state = {
            value: store.getState().changeValue,
            valuee: store.getState().changeValuee
        }
    }
    addItem = ()=>{
        console.log(this.state.value)
        console.log(this.state.valuee)
    }
    componentDidMount() {
        store.subscribe(()=>{
            this.setState({
                value: store.getState().changeValue,
                valuee: store.getState().changeValuee
            })
        })
    }
    handleChange = (e)=>{
        store.dispatch(changeValue(e.target.value))
    }
    handleChangee = (e)=>{
        store.dispatch(changeValuee(e.target.value))
    }
    
    render() {
        return (
            <div className="register">
                <div className="collection_navbar">
                    <Link to="/mine" className="collection_navbar_link">
                        <i className="iconfont icon-fanhui"></i>
                    </Link>
                    <div className="collection_navbar_no1"><p>注 册</p></div>
                </div>
                <WhiteSpace size="lg"/>
                <div className="register_content_div">
                    <WingBlank>
                        <div className="register_content">
                            {/* <form action="#" method="post"> */}
                                <input className="register_content_name" name="userid" 
                                onChange={this.handleChange}
                                type="text" placeholder=" 请输入用户名："></input>

                                <WhiteSpace size="lg"/>
                                <input className="register_content_name" name="email" 
                                type="email" placeholder=" 请输入邮箱号："></input>
                                
                                <WhiteSpace size="lg"/>
                                <input className="register_content_name" name="pwd" 
                                onChange={this.handleChangee}
                                type="password" placeholder=" 请输入密码："></input>
                                <WhiteSpace size="lg"/>
                                <div>
                                    <input className="register_content_code"
                                     name="code" type="text" placeholder=" 验证码："></input>
                                    <div className="register_content_getcode">获取验证码</div>
                                    <div className="mine_clearfloat"></div>
                                </div>
                                <WhiteSpace size="lg"/>
                                <input className="register_content_finish" type="submit"
                                onClick={this.addItem}
                                value="完成注册"></input>
                            {/* </form> */}
                        </div>
                    </WingBlank>
                </div>
            </div>
        )
    }
}