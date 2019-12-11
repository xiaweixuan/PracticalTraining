import React, { Component, useState, useEffect } from 'react'
import { HashRouter as Link } from 'react-router-dom'
import store from '../store';
import './Community.css'

export default function CommunityOther() {
    let [data, setData] = useState([]);
    let [data1, setData1] = useState([]);
    var data2 = 0;
    let [userid, setData2] = useState(store.getState().LoginchangeValueName);
    let [flag,setFlag]=useState(store.getState().loginstateflag)
    useEffect(() => {
        fetch('http://xiawx.top:8080/releases')
            .then(res => res.json())
            .then(res => {
                setData(res.content);

                // console.log(res.content);
                for (var i = 0; i < res.content.length; i++) {
                    if (res.content[i].userid != userid) {
                        data1[data2] = res.content[i]
                        data2++;
                    }
                }
                setData1(data1);
                setData(data1);
                console.log(data1);
                if (data1.length == 0) {
                    setData2('name');
                    return 0;

                }
                else {
                    for (var i = 0; i < data1.length; i++) {

                        var canvas = document.getElementById('canvas2' + i);
                        // console.log(canvas);
                        var context = canvas.getContext("2d");
                        console.log(data1[i]);
                        var a = new window.Picture({col:data1[i].col,row:data1[i].raw,width:canvas.width,height:canvas.height,context:context});
                        a.drawDataMatrix=a.prase(data1[i].paintdata);
                        a.draw(context)
                    }

                }

            })
    }, [])
    function timestampToTime(timestamp) {
        return new Date(parseInt(timestamp)).toLocaleString().replace(/:d{1,2}$/,' ');    
    }
    return (
        <div >


                    {
                        data.map((item,idx)=>
                        <div className="community_chat_another">
                            <div className='community_chat_another_headpic_box'>
                                <img className='community_chat_another_headpic' 
                                src='img/mine_message_img.png'></img>
                            </div>
                            <p className='community_chat_another_id'>{data[idx].userid}</p>
                            <div className='community_chat_talk'>
                    <p className='community_chat_another_word'>{data[idx].paintid}</p>
                                <div className='community_chat_talk_pic_box'>
                                        <canvas className='community_chat_talk_canvas' 
                                        
                                        id={"canvas2"+idx}>
                                            
                                        </canvas>
                              
                                </div>
                                <p className='community_chat_another_time'>{timestampToTime(item.paintid.slice(item.paintid.length-13))}</p>
                            </div>
                        </div>
                        )
                    }
        </div>

    )
}