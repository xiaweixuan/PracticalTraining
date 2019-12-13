import React, { Component } from 'react'
import {HashRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom'
import { WingBlank, WhiteSpace } from 'antd-mobile';
import store from '../store';
import {changeValue,changeValuee,changeValueee,changeValueeee} from '../actions';
import './Register.css'
import './button.css'

export default class Register extends Component {
    constructor(){
        super();
        this.state = {
            // 昵称
            value: store.getState().changeValue,
            // 密码
            valuee: store.getState().changeValuee,
            // 邮箱
            valueee: store.getState().changeValueee,
            // 验证码
            valueeee: store.getState().changeValueeee,
            // 判断用户名 0为空 1默认 2正确 3重复
            jugdename:1,
            // 判断邮箱 0为空 1默认 2正确 3正则不正确
            jugdeemail:1,
            // 判断密码
            jugdepwd:1,
            // 判断验证码 0为空 1默认 2正确 3验证码错误 4邮箱为空
            jugdecode:1,
            aac:'',
            time: 2,
            btnDisable:false,
            btnContent: '发送验证码'
        }
    }
    
    addItem = ()=>{
        if(this.state.aac != "" && this.state.aac==this.state.valueeee){
            this.setState({
                jugdecode:2
            })
            if(this.state.jugdename==2 && this.state.jugdeemail==2 && this.state.jugdepwd==2&&this.state.jugdecode==2){
                fetch('http://xiawx.top:8080/register', {
                    body: JSON.stringify({userid:this.state.value,
                        pwd:this.state.valuee,email:this.state.valueee}),
                        method: 'POST',
                    })
                    .then(res=>res.json())
                    .then(res=>{
                        var data=res.content;
                        console.log(data);
                        if(data==true){
                            this.props.history.push('/denglu')
                        }
                    })
            }
        }
        else if(this.state.aac != "" &&this.state.aac!=this.state.valueeee){
            this.setState({
                jugdecode:3
            })
            if(this.state.jugdename==1){
                this.setState({jugdename:0})
            }
            if(this.state.jugdeemail==1){
                this.setState({jugdeemail:0})
            }
            if(this.state.jugdepwd==1){
                this.setState({jugdepwd:0})
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
    onblur=()=>{
        fetch('http://xiawx.top:8080/usrcnki?userid='+this .state.value, {
            method: 'GET',
        })
        .then(res=>res.json())
        .then(res=>{
            var data=res.content;
            if(this.state.value == ''){
                this.setState({
                    jugdename:0
                })
            }
            else if(this.state.value != '' && data == true){
                this.setState({
                    jugdename:2
                })
            }
            else if(this.state.value != '' && data == false){
                this.setState({
                    jugdename:3
                })
            }
        })
    }
    jugdeblankemail=(value)=>{
        var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); 
        if(reg.test(value)==false && value == ''){
            this.setState({
                jugdeemail:0
            })
        }
        else if(reg.test(value)){
            this.setState({
                jugdeemail:2
            })
        }
        else if(reg.test(value)==false && value != ''){
            this.setState({
                jugdeemail:3
            })
        }
        else{
            this.setState({
                jugdeemail:1
            })
        }
    }
    jugdeblankpwd=(value)=>{
        if(value == ''){
            this.setState({
                jugdepwd:0
            })
        }
        else{
            this.setState({
                jugdepwd:2
            })
        }
    }
    jugdeblankcode=(value)=>{
        if(value == ''){
            this.setState({
                jugdecode:0
            })
        }
    }
    componentDidMount() {
        store.subscribe(()=>{  
            this.setState({
                value: store.getState().changeValue,
                valuee: store.getState().changeValuee,
                valueee: store.getState().changeValueee,
                valueeee: store.getState().changeValueeee
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
    handleChangeeee = (e)=>{
        store.dispatch(changeValueeee(e.target.value))
    }
    
    render(){
        let timeChange;
        let ti = this.state.time;
        const clock =()=>{
            if (ti > 0) {
                ti = ti - 1;
                this.setState({
                    time: ti,
                    btnContent: "已发送"+ti+ "秒",
                });
            }
            else{
                clearInterval(timeChange);
                this.setState({
                    btnDisable: false,
                    time: 2,
                    btnContent: "发送验证码",
                })
            }
        }
        let aka="";
        const sendCode = async () =>{
            if(this.state.valueee == ""){
                this.setState({jugdecode:4});
                console.log(this.state.jugdecode);
            }
            else if(this.state.valueee != ""){
                this.setState({jugdecode:1});
                let ret = await fetch("http://47.97.90.172:8083/?email="+this.state.valueee,{
                    method: 'GET',
                })
                .then(res=>res.json())
                .then(res=>{
                    aka = res.content
                    return aka;
                })
                this.setState({
                    btnDisable: true,
                    aac:ret
                    // btnContent: "10s之内不能再次发送验证码",
                });
                timeChange = setInterval(clock,1000);
                // console.log(ret)
                return ret;
            }
        }
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
                            <input className="register_content_name" 
                            name="userid" 
                            onChange={this.handleChange}
                            onBlur={this.onblur}
                            type="text" 
                            placeholder=" 请输入用户名："></input>
                            <div className="register_user" 
                            style={{display:this.state.jugdename==3?"block":"none"}}>
                                用户名重复不可用
                            </div>
                            <div className="register_user" 
                            style={{display:this.state.jugdename==0?"block":"none"}}>
                                用户名不能为空
                            </div>
                            
                            <WhiteSpace size="lg"/>
                            
                            <input className="register_content_name" 
                            name="email" 
                            onBlur={()=>{this.jugdeblankemail(this.state.valueee)}}
                            type="email" 
                            placeholder=" 请输入邮箱号：" 
                            onChange={this.handleChangeee}></input>
                            <div className="register_user" 
                            style={{display:this.state.jugdeemail==0?"block":"none"}}>
                                邮箱不能为空
                            </div>
                            <div className="register_user" 
                            style={{display:this.state.jugdeemail==3?"block":"none"}}>
                                邮箱格式不正确
                            </div>
                            
                            <WhiteSpace size="lg"/>
                            
                            <input className="register_content_name"
                            name="pwd" onBlur={()=>{this.jugdeblankpwd(this.state.valuee)}}
                            onChange={this.handleChangee}
                            type="password" placeholder=" 请输入密码："></input>
                            <div className="register_user" 
                            style={{display:this.state.jugdepwd==0?"block":"none"}}>
                                密码不能为空
                            </div>
                            
                            <WhiteSpace size="lg"/>
                            
                            <div>
                                <input className="register_content_code"
                                onBlur={()=>{this.jugdeblankcode(this.state.valueeee)}}
                                onChange={this.handleChangeeee}
                                type="text" placeholder=" 验证码："></input>

                                <button type="primary" 
                                className="btn" inline 
                                onClick={sendCode}
                                disabled={this.state.btnDisable}>
                                    {this.state.btnContent}
                                </button>
                                

                                <div className="mine_clearfloat"></div>
                            </div>
                            <div className="register_user" 
                                style={{display:this.state.jugdecode==0?"block":"none"}}>
                                    验证码不能为空
                            </div>
                            <div className="register_user" 
                                style={{display:this.state.jugdecode==3?"block":"none"}}>
                                    验证码错误
                            </div>
                            <div className="register_user" 
                                style={{display:this.state.jugdecode==4?"block":"none"}}>
                                    邮箱为空
                            </div>
                            
                            <WhiteSpace size="lg"/>
                            
                            <input className="register_content_finish" 
                            type="submit"
                            onClick={this.addItem}
                            value="完成注册"></input>
                            
                        </div>
                    </WingBlank>
                </div>
            </div>
        )
    }
}