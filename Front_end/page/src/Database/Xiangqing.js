import React, { Component } from 'react'
import {HashRouter as Router,Link} from 'react-router-dom';
export default class Xiangqing extends Component {
    render() {
        return (
            <div className="database">
                <div>
                    <div className="xiangqing_header">
                        <Router>
                            <Link to='/' className="xiangqing_header_i">
                                <i className="iconfont icon-fanhui"></i>
                            </Link>
                        </Router>
                        <div className="xiangqing_header_i_no2">
                            <i className="iconfont icon-shoucang1"></i>
                        </div>
                        <div>
                            <button className="xiangqing_header_done">完 成</button>
                        </div>
                    </div>
                </div>
                <div className="xiangqing_zhong">
                    <div className="xiangqing_xinxi">
                        <div className="xiangqing_touxiang">
                            <img src="img/mine_message_img.png"/>
                        </div>
                        <div className="xiangqing_name">
                            xx官方
                        </div>
                    </div>
                    <div className="xiangqing_zuoping">
                        <canvas className="xiangqing_zuoping_canvas">

                        </canvas>
                    </div>
                </div>
                <div className="xiangqing_bottom">
                    <div className="xiangqing_bottom_1">1</div>
                    <div className="xiangqing_bottom_1">1</div>
                    <div className="xiangqing_bottom_1">1</div>
                    <div className="xiangqing_bottom_1">1</div>
                </div>
            </div>
        )
    }
}