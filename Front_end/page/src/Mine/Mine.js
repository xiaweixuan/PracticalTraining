import React, { Component } from 'react'
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import { WingBlank, WhiteSpace } from 'antd-mobile';
import { Flex} from 'antd-mobile';
import './Mine.css'
import Undertab from '../undertab/Undertab'

export default function Mine(){
    return (
        <div className="mine">
            <div className="mine_navbar_div">
                <p className="mine_navbar">我 的</p>
            </div>
            <div className="mine_message_div">
                <WingBlank>
                    <div className="mine_message">
                        <img className="mine_message_left" 
                        src="img/mine_message_img.png"/>
                        <div className="mine_message_right">
                            <div className="mine_mesage_name">大海</div>
                            <div className="mine_mesage_sign">TA还没有个性签名</div>
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