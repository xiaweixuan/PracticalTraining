import React ,{useState} from 'react';
import { NavLink} from 'react-router-dom';
import './Sider.css';

export default function Sider() {
    function chageStyle(id,id1,id2,id3,id4){
        let node = document.getElementById(id);
        let node1 = document.getElementById(id1);
        let node2 = document.getElementById(id2);
        let node3 = document.getElementById(id3);
        let node4 = document.getElementById(id4);
        node.className = 'click';
        node1.className = 'unclick';
        node2.className = 'unclick';
        node3.className = 'unclick';
        node4.className = 'unclick';
    }
    return (
        <div className='sider_div'>
            <ul style ={{float:'left'}}>
                <li id="home"><NavLink exact onClick={()=>{chageStyle('home','user','paint','work','collect')}} to = '/home'>系统首页</NavLink></li>
                {/* <li><NavLink exact activeStyle={{background:'red'}} to = '/login'>Login</NavLink></li> */}
                <li id="user"><NavLink exact onClick={()=>{chageStyle('user','home','paint','work','collect')}} to = '/user'>用户管理</NavLink></li>
                <li id="paint"><NavLink exact onClick={()=>{chageStyle('paint','home','user','work','collect')}} to = '/paint'>画作管理</NavLink></li>
                <li id="work"><NavLink exact onClick={()=>{chageStyle('work','home','user','paint','collect')}} to = '/work'>作品管理</NavLink></li>
                <li id="collect"><NavLink exact onClick={()=>{chageStyle('collect','home','user','paint','work')}} to = '/collection'>收藏管理</NavLink></li>
            </ul>
        </div>
    )
}
