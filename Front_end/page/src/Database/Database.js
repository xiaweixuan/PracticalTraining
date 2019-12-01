import React, { Component } from 'react'
import {HashRouter as Router,Link} from 'react-router-dom';
import { NavBar, Icon ,Tabs} from 'antd-mobile';
import './Database.css';
import Undertab from '../undertab/Undertab';
import DatabaseBuju from'./DatabaseBuju';
const tabs = [
    { title: '推荐'},
    { title: '动物' },
    { title: '植物' },
    { title: '人' },
];

export default function Database(){
    return (
        <div className="database">
            <div>
                <div className="database_header">
                    <div className="database_input_no1">
                        <i className='iconfont icon-sousuo'></i>
                        <input className="database_input_no2"></input>
                        <Router>
                            <Link to="/search" className="database_search">搜索</Link>
                        </Router>
                    </div>
                </div>
            </div>
            
            <div className='database_tab'>
                <Tabs tabs={tabs} initialPage={0}>
                    <div>
                        <DatabaseBuju/>
                    </div>
                    <div>
                        <DatabaseBuju/>
                    </div>
                    <div>
                        <DatabaseBuju/>
                    </div>
                    <div>
                        <DatabaseBuju/>
                    </div>
                </Tabs>
            </div>
            <div className="database_hight"></div>
            <Undertab flag="1"/>
        </div>
    )
}