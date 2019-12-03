import React, { Component } from 'react'
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import { WingBlank, WhiteSpace } from 'antd-mobile';
import { Flex} from 'antd-mobile';
import './Mine.css'
import store from '../store';
import Undertab from '../undertab/Undertab'

export default class Mine extends Component {
    constructor(){
        super();
        this.state={
            flag:store.getState().loginstateflag,
            userid: store.getState().LoginchangeValueName,
            data:""
        }
    }
    componentDidMount() {
        if(this.state.flag == true){
            fetch('http://xiawx.top:8080/personal?userid='+this.state.userid)
            .then(res=>res.json())
            .then((data)=>{
                this.setState({
                    data:data.content[0]
                })
                console.log(this.state.data.userid);
            })
        }
    }
    render(){
        return (
        <div className="mine">
            <div className="mine_navbar_div">
                <p className="mine_navbar">我 的</p>
            </div>
            <div className="mine_message_div">
                <WingBlank>
                    <div className="mine_message" style={{display:this.state.flag?"block":"none"}}>
                        <div id="user-photo">
                            <img className="mine_message_left" src={this.state.filePhoto || "img/mine_message_img.png"}/>
                        </div>
                        <div className="mine_message_right">
                            <div className="mine_mesage_name">{this.state.data.userid}</div>
                            <div className="mine_mesage_sign">TA还没有个性签名</div>
                        </div>
                        <div className="mine_clearfloat"></div>
                    </div>
                    <div className="mine_message" style={{display:this.state.flag?"none":"block"}}>
                    <div id="user-photo">
                            <img className="mine_message_left" src={this.state.filePhoto || "img/mine_message_img.png"}/>
                        </div>
                        <div className="mine_message_right">
                            <div className="mine_mesage_none" onClick={this.handle}>未登录</div>
                        </div>
                        <div className="mine_clearfloat"></div>
                    </div>
                </WingBlank>
            </div>
            
            <WhiteSpace size="md"/>
            <div className="mine_three_div">
                <WingBlank>
                    <div className="mine_three">
                        <Flex>
                            <Flex.Item>
                                <Link className="mine_works" to="/opus">
                                    <i className="iconfont icon-zuopin"></i>
                                    <p>我的作品</p>
                                </Link>
                            </Flex.Item>

                            <Flex.Item>
                                <Link className="mine_works" to="/collection">
                                    <i className="iconfont icon-shoucang"></i>
                                    <p>我的收藏</p>
                                </Link>
                            </Flex.Item>
                            
                            <Flex.Item>
                                <Link className="mine_works" to="/release">
                                    <i className="iconfont icon-fabu"></i>
                                    <p>我的发布</p>
                                </Link>
                            </Flex.Item>
                        </Flex>
                        
                        <div className="mine_clearfloat"></div>
                    </div>
                </WingBlank>
            </div>
            
            <WhiteSpace size="md" />
            <div className="mine_bottom_div">
                <WingBlank>
                    <div className="mine_bottom">
                        <div className="mine_bottom_setup_div">
                            <i className="iconfont icon-set"></i>
                            <div className="mine_bottom_setup">
                                <Link className="mine_bottom_link" to="/regsiter">设置</Link>
                            </div>
                            <div className="mine_clearfloat"></div>
                        </div>
                        
                        <div className="mine_bottom_setup_div">
                            <i className="iconfont icon-set"></i>
                            <div className="mine_bottom_setup">
                                <Link className="mine_bottom_link" to="/regsiter">注册</Link>
                            </div>
                            <div className="mine_clearfloat"></div>
                        </div>
                        
                        <div className="mine_bottom_setup_div">
                            <i className="iconfont icon-set"></i>
                            <div className="mine_bottom_setup">
                                <Link className="mine_bottom_link" to="/denglu">登录</Link>
                            </div>
                            <div className="mine_clearfloat"></div>
                        </div>
                    </div>
                </WingBlank>
            </div>
            <div className="mine_hight">
            </div>
            <Undertab flag="3"/>
        </div>
        )
    
    }
}