import React, { useEffect,useState } from 'react'
import './Npc.css'
export default function Npc(props) {
    var actionFrame = [];
    let length=1;
    let npcid=props.npcid;
    let [change,setChange]=useState(true);
    console.log(npcid);
    useEffect(() => {
        var canvas = document.getElementById("npc");
        var context = canvas.getContext("2d");
        var pic = new window.Picture({ col: 80, row: 50, width: canvas.width, height: canvas.height, context: context });
        console.log(npcid);
        fetch('http://xiawx.top:8080/showanpc?npcid=you').then(res => res.json()).then((data) => {
            length=data.length;
            actionFrame = data.content;
            actionRestore(pic);
            console.log(data);
        })
        // setTimeout(() => {
        //     npcAction(pic);
        // }, 1000);
        canvas.addEventListener('touchstart',()=>{
            npcAction(pic);
        })
        canvas.addEventListener('click',()=>{
            npcAction(pic);
        })

    },[change])
    function npcAction(pic) {
        //动作
        var n = 0;
        var timer = setInterval(() => {
            pic.drawDataMatrix = pic.prase(actionFrame[n].paintdata);
            pic.initbackground(pic.context);
            pic.draw(pic.context);
            n++;
            // var l=length;0
            console.log(length)
            if (n == length) {
                clearInterval(timer)
                setTimeout(() => {
                    actionRestore(pic)
                }, 1000);   
            };
        }, 200);
    }

    function actionRestore(pic) {
        pic.drawDataMatrix = pic.prase(actionFrame[0].paintdata);
        pic.initbackground(pic.context);
        pic.draw(pic.context);
    }
    return (<canvas id='npc'></canvas>)
}

