import React, { Component,useState,useEffect } from 'react'

export default function ShowtheTime(props){
    let [data,setData]=useState([]);
    useEffect(()=>{
        console.log(new window.Picture);
        fetch('http://localhost:8080/releases')
        .then(res=>res.json())
        .then(res=>{
            setData(res.content);
            console.log(res.content.length);
            for(var i=0;i<res.content.length;i++){
                var canvas = document.getElementById('canvas'+i);
                var context=canvas.getContext("2d");
                var a = new window.Picture;
            
                a.prase(res.content[i].paintdata);
                a.drawDataMatrix=a.prase(res.content[i].paintdata);
                a.initWH(canvas.width,canvas.height);
                a.draw(context)
                // a.inittable(context)
            }
        })

    },[data])
    return <div>
        {
            data.map((item,idx)=>
            <div>
                <canvas id={"canvas"+idx} width='400px'height='400px'>
                    
                </canvas>
                <hr/>
            </div>
            )
        }
    </div>
}