import React, { useEffect } from 'react'
export default function Npc() {
    var actionFrame = [];

    useEffect(() => {
        var canvas = document.getElementById("npc");
        var context = canvas.getContext("2d");
        var pic = new window.Picture({ col: 30, row: 30, width: canvas.width, height: canvas.height, context: context });
        fetch('http://xiawx.top:8080/renpc').then(res => res.json()).then((data) => {
            actionFrame = data.content;
            actionRestore(pic);
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

    }, [])
    function npcAction(pic) {
        //动作
        var n = 0;
        var timer = setInterval(() => {
            pic.drawDataMatrix = pic.prase(actionFrame[n].paintdata);
            pic.initbackground(pic.context);
            pic.draw(pic.context);
            n++;
            if (n === 6) {
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
    return (<canvas id='npc' width='200px' height='200px'></canvas>)
}

