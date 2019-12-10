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
            // 判断用户名 0为空 1默认 2正确 3重复
            jugdename:1,
            // 判断邮箱 0为空 1默认 2正确 3正则不正确
            jugdeemail:1,
            // 判断密码
            jugdepwd:1
        }
    }
    addItem = ()=>{
        // console.log(this.state.value)
        // console.log(this.state.valuee)
        // console.log(this.state.valueee);
        if(this.state.jugdename==2 && this.state.jugdeemail==2 && this.state.jugdepwd==2){
            fetch('http://xiawx.top:8080/register', {
                body: JSON.stringify({userid:this.state.value,pwd:this.state.valuee,email:this.state.valueee}),
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
        }

    }
    onblur=()=>{
        fetch('http://xiawx.top:8080/usrcnki?userid='+this .state.value, {
            method: 'GET',
        })
        .then(res=>res.json())
        .then(res=>{
            var data=res.content;
            // console.log(res);
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
        console.log(this.state.jugdename);
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
        console.log(this.state.jugdepwd);
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
                            {/* <form action="http://xiawx.top:8080/register" method="POST"> */}
                                <input className="register_content_name" name="userid" 
                                onChange={this.handleChange}
                                onBlur={this.onblur}
                                type="text" placeholder=" 请输入用户名：" ></input>
                                <div className="register_user" style={{display:this.state.jugdename==3?"block":"none"}}>用户名重复不可用</div>
                                <div className="register_user" style={{display:this.state.jugdename==0?"block":"none"}}>用户名不能为空</div>
                                <WhiteSpace size="lg"/>
                                
                                <input className="register_content_name" name="email" onBlur={()=>{this.jugdeblankemail(this.state.valueee)}}
                                type="email" placeholder=" 请输入邮箱号：" onChange={this.handleChangeee}></input>
                                <div className="register_user" style={{display:this.state.jugdeemail==0?"block":"none"}}>邮箱不能为空</div>
                                <div className="register_user" style={{display:this.state.jugdeemail==3?"block":"none"}}>邮箱格式不正确</div>

                                <WhiteSpace size="lg"/>
                                
                                <input className="register_content_name" name="pwd" onBlur={()=>{this.jugdeblankpwd(this.state.valuee)}}
                                onChange={this.handleChangee}
                                type="password" placeholder=" 请输入密码："></input>
                                <div className="register_user" style={{display:this.state.jugdepwd==0?"block":"none"}}>密码不能为空</div>
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
                                
                            {/* </form> */}
                            

                        </div>
                    </WingBlank>
                </div>
            </div>
        )
    }
}