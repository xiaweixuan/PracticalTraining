import React, { Component } from 'react'
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import { WingBlank, WhiteSpace } from 'antd-mobile';
import { Flex} from 'antd-mobile';
import './Mine.css'
import store from '../store';
import Undertab from '../undertab/Undertab'
import Npc from '../npc/Npc'
import {Motto,Email} from '../actions';
export default class Mine extends Component {
    constructor(){
        super();
        this.state={
            flag:store.getState().loginstateflag,
            userid: store.getState().LoginchangeValueName,
            judge:1,
            user_data:"",
            offpaint_data:[],
            judge1:0
        }
    }
    
    componentDidMount() {
        if(this.state.flag == true){
            fetch('http://xiawx.top:8080/personal?userid='+this.state.userid)
            .then(res=>res.json())
            .then((res)=>{
                this.setState({
                    user_data:res.content[0]
                })
                store.dispatch(Motto(res.content[0].motto));
                store.dispatch(Email(res.content[0].email));
                console.log(res.content[0]);
            })
            this.sendrequest('work',this.state.userid,0);
        }
    }
    sendrequest=(choose,userid,id)=>{
        let url = 'http://xiawx.top:8080/'+choose+'?userid='+userid;
        fetch(url)
        .then(res=>res.json())
        .then(res=>{
            var arr = [];
            if(res.content.length>4){
                arr = res.content.slice(0,4);
                this.setState({
                    judge1:0
                })
            }
            else if(res.content.length==0){
                arr = res.content;
                this.setState({
                    judge1:1
                })
            }
            else{
                arr = res.content;
                this.setState({
                    judge1:0
                })
            }
            this.setState({
                 offpaint_data:arr
            })
            for(var i=0;i<this.state.offpaint_data.length;i++){
                var canvas = document.getElementById('canvas'+id+i);
                var context=canvas.getContext("2d");
                var a = new window.Picture({col:this.state.offpaint_data[i].col,row:this.state.offpaint_data[i].raw,width:canvas.width,height:canvas.height,context:context});
                a.drawDataMatrix=a.prase(this.state.offpaint_data[i].paintdata);
				a.draw(context)
            }
        })
    }
    change0=()=>{
        this.setState({
            judge:1
        })
        if(this.state.flag == true){
            this.sendrequest('work',this.state.user_data.userid,0);
        }
    }
    change1=()=>{
        this.setState({
            judge:2
        })
        if(this.state.flag == true){
            this.sendrequest('collection',this.state.user_data.userid,1);
        }
    }
    change2=()=>{
        this.setState({
            judge:3
        })
        if(this.state.flag == true){
            this.sendrequest('perput',this.state.user_data.userid,2);
        }
    }
    render(){
        return (
        <div className="mine">
            <div className="mine_navbar_div">
                <p className="mine_navbar">我 的</p>
                <Link to={this.state.flag?'/setup':'/denglu'}>
                    <i className="iconfont icon-set"></i>
                </Link>
                <div className="mine_clearfloat"></div>
            </div>
            {/* 个人信息 */}
            <div className="mine_message_div">
                <WingBlank>
                    {/* 登录状态 */}
                    <div className="mine_message" style={{display:this.state.flag?"block":"none"}}>
                        <div id="user-photo">
                            <img className="mine_message_left" src={this.state.filePhoto || "img/mine_message_img.png"}/>
                        </div>
                        <div className="mine_message_right">
                            <div className="mine_message_name">{this.state.user_data.userid}</div>
                            <div className="mine_message_sign">{this.state.user_data.motto || "TA很神秘，什么都没有留下"}</div>
                            <div className="mine_message_edit"><Link to="/edit"><i className="iconfont icon-iconset0137"></i></Link></div>
                        </div>
                        <div className="mine_clearfloat"></div>
                    </div>
                    {/* 未登录状态 */}
                    <div className="mine_message" style={{display:this.state.flag?"none":"block"}}>
                    <div id="user-photo">
                        <img className="mine_message_left" src={this.state.filePhoto || "img/mine_message_img.png"}/>
                        </div>
                        <div className="mine_message_right">
                            <div className="mine_message_name" onClick={this.handle}>未登录</div>
                            <div className="mine_message_sign">
                                <Link to="/denglu">登录</Link> /
                                <Link to="/regsiter"> 注册</Link>
                            </div>
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
                                <div className="mine_works" onClick={this.change0}>
                                    <i className="iconfont icon-zuopin" style={{color:this.state.judge==1?"#FF7414":"black"}}></i>
                                    <p style={{color:this.state.judge==1?"#FF7414":"black"}}>我的作品</p>
                                </div>
                            </Flex.Item>

                            <Flex.Item>
                                <div className="mine_works" onClick={this.change1}>
                                    <i className="iconfont icon-shoucang" style={{color:this.state.judge==2?"#FF7414":"black"}}></i>
                                    <p style={{color:this.state.judge==2?"#FF7414":"black"}}>我的收藏</p>
                                </div>
                            </Flex.Item>
                            
                            <Flex.Item>
                                <div className="mine_works" onClick={this.change2}>
                                    <i className="iconfont icon-fabu" style={{color:this.state.judge==3?"#FF7414":"black"}}></i>
                                    <p style={{color:this.state.judge==3?"#FF7414":"black"}}>我的发布</p>
                                </div>
                            </Flex.Item>
                        </Flex>
                        
                        <div className="mine_clearfloat"></div>
                    </div>
                </WingBlank>
            </div>

            <WhiteSpace size="md" />
            <div className="mine_show_div" style={{display:this.state.flag?"block":"none"}}>
            <WingBlank>
                {/* 我的作品 */}
                <div className="mine_show_opus" style={{display:this.state.judge==1?"block":"none"}}>
                    <div className="mine_show_no1">
                        <p className="mine_show_word_no1">我的作品</p>
                        <Link to="/opus"><p className="mine_show_word_no2">查看更多>></p></Link>
                        <div className="mine_clearfloat"></div>
                    </div>
                    {
                        this.state.offpaint_data.map((item,idx)=>
                            <div className="mine_content">
                                <canvas className="mine_content_canvas" 
                                id={"canvas0"+idx} width='400px'height='400px'>
                                        
                                </canvas>
                            </div>
                        )
                    }
                </div>
                {/* 我的收藏 */}
                <div className="mine_show_opus" style={{display:this.state.judge==2?"block":"none"}}>
                    <div className="mine_show_no1">
                        <p className="mine_show_word_no1">我的收藏</p>
                        <Link to="/collection"><p className="mine_show_word_no2">查看更多>></p></Link>
                        <div className="mine_clearfloat"></div>
                    </div>
                    {
                        this.state.offpaint_data.map((item,idx)=>
                            <div className="mine_content">
                                <canvas className="mine_content_canvas" 
                                id={"canvas1"+idx} width='400px'height='400px'>
                                        
                                </canvas>
                            </div>
                        )
                    }
                </div>
                {/* 我的发布 */}
                <div className="mine_show_opus" style={{display:this.state.judge==3?"block":"none"}}>
                    <div className="mine_show_no1">
                        <p className="mine_show_word_no1">我的发布</p>
                        <Link to="/release"><p className="mine_show_word_no2">查看更多>></p></Link>
                        <div className="mine_clearfloat"></div>
                    </div>
                    {
                        this.state.offpaint_data.map((item,idx)=>
                            <div className="mine_content">
                                <canvas className="mine_content_canvas" 
                                id={"canvas2"+idx} width='400px'height='400px'>
                                        
                                </canvas>
                            </div>
                        )
                    }
                </div>
            </WingBlank>
            </div>
            <Link to="/database">
                <div className="mine_show_nologin" style={{display:this.state.judge1==1?"block":"none"}}>
                    什么都没有，快去看看吧
                </div>
            </Link>
            <div className="mine_show_nologin" style={{display:this.state.flag?"none":"block"}}>
                您尚未<Link to="/denglu">登录</Link>
            </div>
            <div className="mine_hight"></div>
            <Npc />
            <Undertab flag="5"/>
        </div>
        )
    
    }
}