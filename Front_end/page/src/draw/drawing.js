import React, { useState, useEffect } from 'react'
import Palette from './palette'


import './draw.css'
export default function Drawing() {
    // var [context, setContext] = useState({})

    var [picdata, setPicdata] = useState("#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#eee00e#eee00e#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#eee00e#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#eee00e#eee00e#ffffff#eee00e#eee00e#eee00e#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#ffffff#eee00e#eee00e#ffffff#ffffff#eee00e#ffffff#eee00e#ffffff#eee00e#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#eee00e#eee00e#ffffff#eee00e#eee00e#eee00e#eee00e#ffffff#ffffff#eee00e#eee00e#eee00e#ffffff#eee00e#ffffff#ffffff#eee00e#ffffff#ffffff#eee00e#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#eee00e#eee00e#ffffff#ffffff#eee00e#ffffff#ffffff#eee00e#eee00e#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#ffffff#ffffff#ffffff#eee00e#ffffff#eee00e#eee00e#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#ffffff#ffffff#eee00e#eee00e#eee00e#eee00e#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#eee00e#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#eee00e#eee00e#eee00e#eee00e#eee00e#eee00e#eee00e#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff");
    // var [color, setColor] = useState("#ffffff")
    var [colorlist, setColorlist] = useState([])
    var [obj, setObj] = useState(pic)
    var pic = new window.Picture();
    useEffect(() => {
        // setPicdata("#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#eee00e#eee00e#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#eee00e#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#eee00e#eee00e#ffffff#eee00e#eee00e#eee00e#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#ffffff#eee00e#eee00e#ffffff#ffffff#eee00e#ffffff#eee00e#ffffff#eee00e#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#eee00e#eee00e#ffffff#eee00e#eee00e#eee00e#eee00e#ffffff#ffffff#eee00e#eee00e#eee00e#ffffff#eee00e#ffffff#ffffff#eee00e#ffffff#ffffff#eee00e#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#eee00e#eee00e#ffffff#ffffff#eee00e#ffffff#ffffff#eee00e#eee00e#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#ffffff#ffffff#ffffff#eee00e#ffffff#eee00e#eee00e#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#ffffff#ffffff#eee00e#eee00e#eee00e#eee00e#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#eee00e#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#eee00e#eee00e#eee00e#eee00e#eee00e#eee00e#eee00e#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff")
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");
        // setContext(ct)
        pic.context=context;
        pic.drawDataMatrix = pic.prase(picdata)
        pic.produceColorList()
        pic.createNumberData()
        pic.initWH(canvas.width, canvas.height);
        // pic.drawWhite(context);
        pic.drawNumber(context)
        pic.initdata();
        pic.inittable(context);
        pic.todraw(context)
        console.log(pic)

        setColorlist(pic.colorList);
        setObj(pic);

    }, [])

    function changeColor(item) {
        obj.color = item;
    }
    function changeColorFree(color) {
        console.log("自由改颜色");
        obj.color = color;
    }

    function showNumber(){
        // console.log(obj.drawDataMatrix);
        obj.clearCanvas(obj.context);
        
        obj.inittable(obj.context);
        obj.draw(obj.context);
        obj.drawNumber(obj.context);
        
    }
    function recall(){
        obj.clearCanvas(obj.context);
        obj.inittable(obj.context);
        obj.drawNumber(obj.context);
        obj.drawRecall(obj.context);
        
        
        
    }
    function finishDraw(){
        // //上传数据
        // fetch(url,{
        //     method:"POST",
        //     body:JSON.stringify({data:obj.toString})
        // })
        console.log(obj.toString())

    }

    return (<div className="drawing">
        drawing
        <div className="" style={{ width: "95%", margin: "auto" }}>
            <div className="drawing_canvas_div">
                <canvas id="canvas" width="300px" height="300px">您的浏览器版本过低</canvas>
            </div>

            <div className="drawing_body">
                {/* <div></div> */}
                <div className="drawing_title">
                    <h3>推荐色</h3>
                </div>
                <div className="drawing_main">
                    <div>
                        {
                            colorlist/*.filter((item)=>item='#ffffff')*/.map((item, idx) =>
                                <div key={idx} className="drawing_color">
                                    <div className="drawing_color_div" onClick={() => { changeColor(item) }} style={{ backgroundColor: item }} key={item} ><span>{idx}</span></div>
                                </div>
                            )
                        }
                        {/* <button onClick={back}>撤回</button> */}
                    </div>
                </div>
            </div>

            <div className="drawing_body">
                {/* <div></div> */}
                <div className="drawing_title">
                    <h3>自由选色</h3>
                </div>
                <div className="drawing_main">
                    <div className="drawing_color">
                        <Palette change={changeColorFree} />
                    </div>
                </div>
            </div>
            <div className="drawing_body">
                {/* <div></div> */}
                <div className="drawing_title">
                    <h3>绘图设置</h3>
                </div>
                <div className="drawing_main">
                    <div className="drawing_btn">
                        <button onClick={showNumber}><span>显示数字</span></button>
                    </div>
                    <div className="drawing_btn">
                        <button onClick={recall}><span>撤回</span></button>
                    </div>
                    <div className="drawing_btn">
                        <button onClick={finishDraw}><span>完成</span></button>
                    </div>
                </div>
            </div>


        </div>
    </div>)
}

