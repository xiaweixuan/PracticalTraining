import React, { Component ,useState,useEffect} from 'react'
import {HashRouter as Router,Link} from 'react-router-dom';
import { NavBar, Icon ,Tabs} from 'antd-mobile';
import './Database.css';
import store from '../store';
import {Search} from '../actions';
import Undertab from '../undertab/Undertab';
import DatabaseBuju from'./DatabaseBuju';
const tabs = [
    { title: '推荐'},
    { title: '植物' },
    { title: '动物' },
    { title: '其他' },
];

export default function Database(props){
    let [value,setValue]=useState(store.getState().Search);
    function handleChange(e){
        store.dispatch(Search(e.target.value));
    }
    function addItem(){
        props.history.push('/search');
    }
        return (  
            <div className="database">
                <div>
                    <div className="database_header">
                        <img className="database_camera" src="img/xiang.png"></img>
                        <div className="database_input_no1">
                            <img className="database_sousou" src="img/so.png"></img>
                            <input className="database_input_no2" onChange={handleChange}  type="text" placeholder="搜索：" name="search"></input>
                            <input className="database_search" type='submit' value="搜 索" style={{border:0}} onClick={addItem}></input> 
                        </div>
                    </div>
                </div>
                <div className="database_font"></div>
                <div className='database_tab'>
                    <Tabs tabs={tabs} initialPage={0}>
                        <div>
                            <DatabaseBuju type={tabs[0].title}/>
                        </div>
                        <div>
                            <DatabaseBuju type={tabs[1].title}/>
                        </div>
                        <div>
                            <DatabaseBuju type={tabs[2].title}/>
                        </div>
                        <div>
                            <DatabaseBuju type={tabs[3].title}/>
                        </div>
                    </Tabs>
                </div>
                <div className="database_hight"></div>
                <Undertab flag="1"/>
            </div>
        )
     
}