import React, { Component } from 'react';
import {HashRouter as Router,Route,Link,Redirect,Switch,useHistory} from 'react-router-dom'
import { WingBlank, WhiteSpace } from 'antd-mobile';
import Undertab from '../undertab/Undertab';
import './Community.css'

class Community extends Component {
	render() {
        return (
            <div className="community_div_no1">
                <div className="community_navbar">
					<p>社 区</p>
					<img className='community_img_add' src='img/add.png'></img>
                </div>
                <WingBlank className="community_wingblank">
					<div className="community_div_no2">
                        
                        {/* 他人发布 */}
                        <div className="community_chat_another">
                            <div className='community_chat_another_headpic_box'>
                                <img className='community_chat_another_headpic' src='img/mine_message_img.png'></img>
                            </div>
                            <p className='community_chat_another_id'>小蓝</p>
                            <div className='community_chat_talk'>
                                <p className='community_chat_another_word'>我发布了自己创作的像素图片，快来和我一起填色叭！</p>
                                <div className='community_chat_talk_pic_box'>
									<Link to="/collection">
                                        <canvas className='community_chat_talk_canvas'>

                                        </canvas>
									</Link>
                                </div>
                                <p className='community_chat_another_time'>五分钟前</p>
                            </div>
                        </div>

                        <div className="community_chat_another">
                            <div className='community_chat_another_headpic_box'>
                                <img className='community_chat_another_headpic' src='img/mine_message_img.png'></img>
                            </div>
                            <p className='community_chat_another_id'>小蓝</p>
                            <div className='community_chat_talk'>
                                <p className='community_chat_another_word'>我发布了自己创作的像素图片，快来和我一起填色叭！</p>
                                <div className='community_chat_talk_pic_box'>
                                    <Link to="/collection">
                                        <canvas className='community_chat_talk_canvas'>
                                    
                                        </canvas>
                                    </Link>
                                </div>
                                <p className='community_chat_another_time'>五分钟前</p>
                            </div>
                        </div>
                        {/* 我的发布 */}
                        <div className="community_chat_mine">
                            <div className='community_chat_mine_headpic_box'>
                                <img className='community_chat_mine_headpic' src='img/mine_message_img.png'></img>
                            </div>
                            <p className='community_chat_mine_id'>小蓝</p>
                            <div className='community_chat_mine_talk'>
                                <p className='community_chat_mine_word'>我发布了自己创作的像素图片，快来和我一起填色叭！</p>
                                <div className='community_chat_mine_talk_pic_box'>
                                    <Link to="/collection">
                                        <canvas className='community_chat_talk_canvas'>
                                    
                                        </canvas>
                                    </Link>
                                </div>
                                <p className='community_chat_mine_time'>五分钟前</p>
                            </div>
                        </div>

                        {/* 他人发布 */}
                        <div className="community_chat_another">
                            <div className='community_chat_another_headpic_box'>
                                <img className='community_chat_another_headpic' src='img/mine_message_img.png'></img>
                            </div>
                            <p className='community_chat_another_id'>小蓝</p>
                            <div className='community_chat_talk'>
                                <p className='community_chat_another_word'>我发布了自己创作的像素图片，快来和我一起填色叭！</p>
                                <div className='community_chat_talk_pic_box'>
                                    <Link to="/collection">
                                        <canvas className='community_chat_talk_canvas'>
                                    
                                        </canvas>
                                    </Link>
                                </div>
                                <p className='community_chat_another_time'>五分钟前</p>
                            </div>
                        </div>

						<div className="community_chat_another">
                            <div className='community_chat_another_headpic_box'>
                                <img className='community_chat_another_headpic' src='img/mine_message_img.png'></img>
                            </div>
                            <p className='community_chat_another_id'>小蓝</p>
                            <div className='community_chat_talk'>
                                <p className='community_chat_another_word'>我发布了自己创作的像素图片，快来和我一起填色叭！</p>
                                <div className='community_chat_talk_pic_box'>
                                    <Link to="/collection">
                                        <canvas className='community_chat_talk_canvas'>
                                    
                                        </canvas>
                                    </Link>
                                </div>
                                <p className='community_chat_another_time'>五分钟前</p>
                            </div>
                        </div>

						<div className="community_chat_another">
                            <div className='community_chat_another_headpic_box'>
                                <img className='community_chat_another_headpic' src='img/mine_message_img.png'></img>
                            </div>
                            <p className='community_chat_another_id'>小蓝</p>
                            <div className='community_chat_talk'>
                                <p className='community_chat_another_word'>我发布了自己创作的像素图片，快来和我一起填色叭！</p>
                                <div className='community_chat_talk_pic_box'>
                                    <Link to="/collection">
                                        <canvas className='community_chat_talk_canvas'>
                                    
                                        </canvas>
                                    </Link>
                                </div>
                                <p className='community_chat_another_time'>五分钟前</p>
                            </div>
                        </div>

                        <div className="community_chat_another">
                            <div className='community_chat_another_headpic_box'>
                                <img className='community_chat_another_headpic' src='img/mine_message_img.png'></img>
                            </div>
                            <p className='community_chat_another_id'>小蓝</p>
                            <div className='community_chat_talk'>
                                <p className='community_chat_another_word'>我发布了自己创作的像素图片，快来和我一起填色叭！</p>
                                <div className='community_chat_talk_pic_box'>
                                    <Link to="/collection">
                                        <canvas className='community_chat_talk_canvas'>
                                    
                                        </canvas>
                                    </Link>
                                </div>
                                <p className='community_chat_another_time'>五分钟前</p>
                            </div>
                        </div>
                    </div>
                </WingBlank>
                <div className="community_hight"></div>
                <Undertab flag="2"/>
            </div>
        )
    }
}
export default Community;