import React, { useState, useEffect,useWindowWidth } from 'react'
import Palette from './palette'

import './draw.css'
export default function Drawing() {
    // var [context, setContext] = useState({})
console.log(1)
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
        obj.clearCanvas(obj.context);
        obj.draw(obj.context);
        // obj.automaticPainting(obj.context);
        // console.log(obj)
        console.log(obj.toString())
        var img=obj.convertCanvasToImage(obj.context);
        document.getElementById("show").appendChild(img)
    }

    var aa;
    // var aa = useState(0);
    // window.onresize = function(){
        var w=window.outerWidth;
        if(w<700){aa=300}
        else if(700<w&&w<900){aa=650}
        else if(900<w){aa=850}
    // }
    return (
    <div className="drawing">
        <div className="" style={{ width: "95%", margin: "auto" }}>
            <div className="drawing_canvas_div">
                <canvas id="canvas" width={aa} height={aa}>您的浏览器版本过低</canvas>
            </div>
            
            <div className="drawing_body">
                <div className="drawing_title">
                    <p className="drawing_word">推荐色</p>
                </div>
                <div className="drawing_main">
                    <div className="drawing_choose">
                        <div className="drawing_choose_no2">
                        {
                            colorlist/*.filter((item)=>item='#ffffff')*/.map((item, idx) =>
                            <div key={idx} className="drawing_color">
                                <div className="drawing_color_div" 
                                onClick={() => { changeColor(item) }} 
                                style={{ backgroundColor: item }} 
                                key={item} >
                                    <p>{idx}</p>
                                </div>
                            </div>
                            )
                        }
                        {
                            colorlist/*.filter((item)=>item='#ffffff')*/.map((item, idx) =>
                            <div key={idx} className="drawing_color">
                                <div className="drawing_color_div" 
                                onClick={() => { changeColor(item) }} 
                                style={{ backgroundColor: item }} 
                                key={item} >
                                    <p>{idx}</p>
                                </div>
                            </div>
                            )
                        }
                        {
                            colorlist/*.filter((item)=>item='#ffffff')*/.map((item, idx) =>
                            <div key={idx} className="drawing_color">
                                <div className="drawing_color_div" 
                                onClick={() => { changeColor(item) }} 
                                style={{ backgroundColor: item }} 
                                key={item} >
                                    <p>{idx}</p>
                                </div>
                            </div>
                            )
                        }
                        {
                            colorlist/*.filter((item)=>item='#ffffff')*/.map((item, idx) =>
                            <div key={idx} className="drawing_color">
                                <div className="drawing_color_div" 
                                onClick={() => { changeColor(item) }} 
                                style={{ backgroundColor: item }} 
                                key={item} >
                                    <p>{idx}</p>
                                </div>
                            </div>
                            )
                        }
                        
                       </div>
                    </div>
                </div>
            </div>

            <div className="drawing_body">
                <div className="drawing_title">
                    <p className="drawing_word">自由选色</p>
                </div>
                <div className="drawing_main">
                    <div className="drawing_color">
                        <Palette change={changeColorFree} />
                    </div>
                </div>
            </div>

            <div className="drawing_body">
                <div className="drawing_title">
                    <p className="drawing_word">绘图设置</p>
                </div>
                <div className="drawing_main">
                    <div className="drawing_btn">
                        <button onClick={showNumber}>
                            显示数字
                        </button>
                    </div>
                    <div className="drawing_btn">
                        <button onClick={recall}>
                            撤回
                        </button>
                    </div>
                    <div className="drawing_btn">
                        <button onClick={finishDraw}>
                            完成
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="drawing_show" id="show" style={{float:'left',marginTop:"10vw"}}>
            <p className="drawing_word">生成图片保存</p>
        </div>
    </div>
    )
}