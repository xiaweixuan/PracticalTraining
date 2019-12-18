import React, { useEffect,useState } from 'react'
import './Npc.css'
import store from '../store';
export default function Npc(props) {
    var actionFrame = [];
    let length=1;
    // let npcid=props.npcid;
    let [change,setChange]=useState(true);
    let [npcid, setNpcid] = useState(store.getState().Npcid);
    console.log(npcid);
    useEffect(() =>{
        store.subscribe(() => {
            setNpcid(store.getState().Npcid);
        });
    })
    useEffect(() => {
        var canvas = document.getElementById("npc");
        var context = canvas.getContext("2d");
        var pic = new window.Picture({ col: npcid.col || 30, row: npcid.raw || 30, width: canvas.width, height: canvas.height, context: context });
        console.log(npcid);
        fetch('http://xiawx.top:8080/showanpc?npcid='+ npcid.npcid).then(res => res.json()).then((data) => {
            length=data.length;
            actionFrame = data.content;
            actionRestore(pic);
            console.log(data);
        })
        canvas.onTouchstart = () => {
            npcAction(pic);
        }
        canvas.onclick = () => {
            npcAction(pic);
            // setChange(!change);
        }
    },[npcid])
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

