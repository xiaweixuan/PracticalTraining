import React,{useEffect} from 'react'
// import picture from 'module'

export default function ToRelease() {
    useEffect(() => {
        var picture = new window.Picture();
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");
        picture.initdata();
        picture.inittable(context);
        picture.todraw(context);
        var btn = document.getElementsByClassName("btn");
        var btn0 = document.getElementById("btn0");
        var btn1 = document.getElementById("btn1");
        for(let i = 0 ; i<btn.length; i++){
            btn[i].onclick = () => {
                // console.log(btn[i].style.backgroundColor);
                picture.color =btn[i].style.backgroundColor;
            }
        }
        btn0.onclick = () => {
            console.log(picture);
            picture.produceColorList();
            picture.createNumberData();
            picture.automaticPainting(context);
            // fetch('localhost:8080/')
        }
        btn1.onclick = () => {
            picture.drawRecall(context);
        }
    },[]);
    return (
        <div className="torelease">
            <div>
                <canvas id="canvas" width='400px' height='400px'>
                    您的浏览器版本过低
                </canvas>
            </div>
            <div className="btn" style={{backgroundColor:'green',width:'30px',height:'30px',borderRadius:'15px'}}></div>
            <div className="btn" style={{backgroundColor:'red',width:'30px',height:'30px',borderRadius:'15px'}}></div>
            <div className="btn" style={{backgroundColor:'blue',width:'30px',height:'30px',borderRadius:'15px'}}></div>
            <button id="btn0">完成</button>
            <button id="btn1">撤销</button>
        </div>
    )
}
