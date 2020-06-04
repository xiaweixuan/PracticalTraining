import React, { useState,useEffect } from 'react'

export default function Collection(){
    let [data,setData]=useState([]);
    useEffect(()=>{
        let url = 'http://localhost:8080/shownpc?npcid=girl';
        fetch(url)
        .then(res=>res.json())
        .then(res=>{
            setData(res.content);
            // console.log(res.content.length);
            for(var i=0;i<res.content.length;i++){
                var canvas = document.getElementById('canvas'+i);
                var context=canvas.getContext("2d");
                var a = new window.Picture({col:res.content[i].col,row:res.content[i].raw,width:canvas.width,height:canvas.height,context:context});			 
				a.drawDataMatrix=a.prase(res.content[i].paintdata);
				a.draw(context)
            }
        })
    },[])

    return(
        <div>
            {
                data.map((item,idx)=>
                <div>
                    <canvas id={"canvas"+idx} width='400px'height='400px'>
                        
                    </canvas>
                </div>
                )
            }
        </div>
    )
}