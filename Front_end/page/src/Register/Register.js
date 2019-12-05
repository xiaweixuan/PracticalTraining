import React, { Component } from 'react'
import {HashRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom'
import { WingBlank, WhiteSpace } from 'antd-mobile';
import store from '../store';
import {changeValue,changeValuee,changeValueee} from '../actions';
import './Register.css'

export default class Register extends Component {
    constructor(){
        super();
        this.state = {
            value: store.getState().changeValue,
            valuee: store.getState().changeValuee,
            valueee: store.getState().changeValueee,
            jugde:false
        }
    }
    addItem = ()=>{
        console.log(this.state.value)
        console.log(this.state.valuee)
        console.log(this.state.valueee);
        fetch('http://xiawx.top:8080/register', {
            body: JSON.stringify({userid:this.state.value,pwd:this.state.valueee,email:this.state.valuee}),
            method: 'POST',
        })
        .then(res=>res.json())
        .then(res=>{
            var data=res.content;
            console.log(data);
            if(data==true){
                console.log(11);
                this.props.history.push('/denglu')
            }
        })

    }
    onblur=()=>{
        fetch('http://xiawx.top:8080/usrcnki?userid='+this .state.value, {
            method: 'GET',
        })
        .then(res=>res.json())
        .then(res=>{
            var data=res.content;
            console.log(data);
            if(data==false){
                this.setState({
                    jugde:true
                })
            }
            else{
                this.setState({
                    jugde:false
                })
            }
            
        })
    }
    componentDidMount() {
        store.subscribe(()=>{  
            this.setState({
                value: store.getState().changeValue,
                valuee: store.getState().changeValuee,
                valueee: store.getState().changeValueee
            })
            
        })
        
    }
    handleChange = (e)=>{
        store.dispatch(changeValue(e.target.value))
    }
    handleChangee = (e)=>{
        store.dispatch(changeValuee(e.target.value))
    }
    handleChangeee = (e)=>{
        store.dispatch(changeValueee(e.target.value))
    }
    displayjudge=()=>{
        this.setState({
            jugde:false
        })
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
                            <form action="http://xiawx.top:8080/register" method="POST">
                                <input className="register_content_name" name="userid" 
                                onChange={this.handleChange}
                                onBlur={this.onblur}
                                type="text" placeholder=" 请输入用户名：" ></input>
                                <div className="register_user" style={{display:this.state.jugde?"block":"none"}}>用户名不可用</div>
                                <WhiteSpace size="lg"/>
                                <input className="register_content_name" name="email" 
                                type="email" placeholder=" 请输入邮箱号：" onChange={this.handleChangeee}></input>
                                
                                <WhiteSpace size="lg"/>
                                <input className="register_content_name" name="pwd" 
                                onChange={this.handleChangee}
                                type="password" placeholder=" 请输入密码："></input>
                                <WhiteSpace size="lg"/>
                                <div>
                                    <input className="register_content_code"
                                     type="text" placeholder=" 验证码："></input>
                                    <div className="register_content_getcode">获取验证码</div>
                                    <div className="mine_clearfloat"></div>
                                </div>
                                <WhiteSpace size="lg"/>
                                <input className="register_content_finish" type="submit"
                                onClick={this.addItem}
                                value="完成注册"></input>
                                
                            </form>
                            

                        </div>
                    </WingBlank>
                </div>
            </div>
        )
    }
}