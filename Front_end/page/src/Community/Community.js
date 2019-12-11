import React, { Component,useState,useEffect } from 'react'
import {HashRouter as Link} from 'react-router-dom'
import { WingBlank, WhiteSpace } from 'antd-mobile';
import Undertab from '../undertab/Undertab';
import { Carousel } from 'antd-mobile';
import './Community.css'
import CommunityMine from './CommunityMine';
import CommunityOther from './CommunityOther';

export default function Community(){
    let [data,setData]=useState([]);
    useEffect(()=>{
        fetch('http://xiawx.top:8080/offpaint')
        .then(res=>res.json())
        .then(res=>{
            setData(res.content);

            // console.log(res.content.length);
            for(var i=0;i<res.content.length;i++){
                var canvas = document.getElementById('canvas'+i);
                var context=canvas.getContext("2d");
                // console.log(res.content[i])
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
                <p>社 区</p>
                <Link to="/addition">
                    <img className='community_img_add' src='img/add.png'></img>
                </Link>
            </div>
            
            <Carousel
            style={{marginTop:'14vw'}}
          autoplay={true}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {[1,2,3].map(val => (
            
              <img
                src="img/tui.png"
                alt=""
                style={{ width: '100%', height:'250px',verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                //   this.setState({ imgHeight: 'auto' });
                }}
              />
            
          ))}
        </Carousel>


            <WingBlank className="community_wingblank">
                <div className="community_div_no2">
                    {/* 他人发布 */}
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
                                        
                                        id={"canvas"+idx}>
                                            
                                        </canvas>
                              
                                </div>
                                <p className='community_chat_another_time'>{timestampToTime(item.paintid.slice(item.paintid.length-13))}</p>
                            </div>
                        </div>
                        )
                    }
                    {
                    <CommunityOther/>
                    }
                    {/* 我的发布 */}
                    {
                    <CommunityMine/>
                    }
                </div>
            </WingBlank>
            <div className="community_hight"></div>
            <Undertab flag="2"/>
        </div>
    )
}