import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import store from '../store';
import './Community.css'

import "antd/dist/antd.css";
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, StarOutlined } from '@ant-design/icons';
const { Meta } = Card;

export default function CommunityOther() {
    let [data, setData] = useState([]);
    let [data1, setData1] = useState([]);
    let [userid, setData2] = useState(store.getState().LoginchangeValueName);
    let [flag,setFlag]=useState(store.getState().loginstateflag)
    var data2 = 0;
    useEffect(() => {
        fetch('http://xiawx.top:8080/releases')
        .then(res => res.json())
        .then(res => {
            setData(res.content);
            for(var i = 0; i < res.content.length; i++) {
                if(res.content[i].userid != userid){
                    data1[data2] = res.content[i]
                    data2++;
                }
            }
            
            setData1(data1)
            setData(data1)
            if(data1.length == 0){
                setData2('name');
                return 0;
            }
            else{
                for(var i=0;i<data1.length;i++){
                    var canvas = document.getElementById('canvas2' + i);
                    var context = canvas.getContext("2d");
                    var a = new window.Picture({
                        col:data1[i].col,
                        row:data1[i].raw,
                        width:canvas.width,
                        height:canvas.height,
                        context:context});
                        a.drawDataMatrix=a.prase(data1[i].paintdata);
                        a.draw(context)
                    }
                }
            })
    },[])

    function timestampToTime(timestamp) {
        return new Date(parseInt(timestamp)).toLocaleString().replace(/:d{1,2}$/,' ');    
    }
    return(
        <div>
            {
                data.map((item,idx)=>
                <Card style={{ width:'100%',marginTop:'3vw'  }}
                        cover={<Link to={{pathname:"/xiangqing2",state:{item}}}>
                        <canvas className='community_chat_talk_canvas'
                        id={"canvas2"+idx}>
                            </canvas>
                    </Link>
                }
                actions={[
                    <StarOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                ]}
                >
                    <Meta
                    avatar={
                    <Avatar src="http://47.97.90.172:8095/x5.png" />}
                    title={data[idx].userid}
                    description={data[idx].describe+'  '+timestampToTime(item.paintid.slice(item.paintid.length-13))}
                    />
                    </Card>
                )
            }
        </div>
    )
}