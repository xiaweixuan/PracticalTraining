import React, { Component,useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import { WingBlank, WhiteSpace } from 'antd-mobile';
import Undertab from '../undertab/Undertab';
import { Carousel } from 'antd-mobile';
import './Community.css'
import Npc from '../npc/Npc'
import Npcsay from '../npcsay/Npcsay'
import CommunityMine from './CommunityMine';
import CommunityOther from './CommunityOther';

import "antd/dist/antd.css";
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, StarOutlined } from '@ant-design/icons';
const { Meta } = Card;

export default function Community(){
    let [data,setData]=useState([]);
    useEffect(()=>{
        fetch('http://xiawx.top:8080/offpaint')
        .then(res=>res.json())
        .then(res=>{
            setData(res.content);
            for(var i=0;i<res.content.length;i++){
                var canvas = document.getElementById('canvas'+i);
                var context=canvas.getContext("2d");
                var a = new window.Picture({col:res.content[i].col,row:res.content[i].raw,width:canvas.width,height:canvas.height,context:context});
                a.drawDataMatrix=a.prase(res.content[i].paintdata);
                a.draw(context);
            }
        })
    },[])

    function timestampToTime(timestamp) {
        return new Date(parseInt(timestamp)).toLocaleString().replace(/:d{1,2}$/,' '); 
    }
    return(
        <div className="community_div_no1">
            <div className="community_navbar">
                <p>社  区</p>
            </div>

            
            <WingBlank className="community_wingblank">
                {/* <div className="community_div_no2"> */}
                    {/* 他人发布 */}
                    {
                        data.map((item,idx)=>
                        <Card className="card"
                        style={{ width:'100%',marginTop:'3vw' }}
                        cover={<Link to={{pathname:"/xiangqing2",state:{item}}}>
                        <canvas className='community_chat_talk_canvas'
                        id={"canvas"+idx}>
                            </canvas>
                    </Link>
                }
                actions={[
                    <StarOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                ]}
                >
                <a href="http://47.97.90.172:8088/service?cid=1&sid=1">
                    <Meta
                    avatar={
                    <Avatar src="http://47.97.90.172:8095/x5.png" />}
                    
                    title={data[idx].userid}
                    description={data[idx].describe+'  '+timestampToTime(item.paintid.slice(item.paintid.length-13))}
                    />
                    </a>
                    </Card>
                    )
                    }
                    
                    {
                        <CommunityOther/>
                    }
                    {/* 我的发布 */}
                    
                    {
                        <CommunityMine/>
                    }
                {/* </div> */}
            </WingBlank>
            <div className="community_hight"></div>
            <Npcsay/>
            <Npc />
            <Undertab flag="2"/>
        </div>
    )
}