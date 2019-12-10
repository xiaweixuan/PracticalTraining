import React, { useState, useEffect, useWindowWidth } from 'react'
import Palette from './palette'

import './draw.css'
export default function Drawing(props) {
    // // var [context, setContext] = useState({})
    // console.log(props.data)
    var [picdata, setPicdata] = useState(props.data);
    // var [color, setColor] = useState("#ffffff")
    var [colorlist, setColorlist] = useState([])
    var [obj, setObj] = useState({})

    var [color, setColor] = useState(true);
    var [tool, setTool] = useState(true);
    var [win, setW] = useState(true);
    function Changefree(){
        setColor(false);  
    }
    function Changetuijian(){
        setColor(true); 
    }
    function ToolSide(){
        setTool(true);  
    }
    function Tool(){
        setTool(false); 
    }
    function WSide(){
        setW(true);  
    }
    useEffect(() => {
        // setPicdata("#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#eee00e#eee00e#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#eee00e#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#eee00e#eee00e#ffffff#eee00e#eee00e#eee00e#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#ffffff#eee00e#eee00e#ffffff#ffffff#eee00e#ffffff#eee00e#ffffff#eee00e#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#eee00e#eee00e#ffffff#eee00e#eee00e#eee00e#eee00e#ffffff#ffffff#eee00e#eee00e#eee00e#ffffff#eee00e#ffffff#ffffff#eee00e#ffffff#ffffff#eee00e#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#eee00e#eee00e#ffffff#ffffff#eee00e#ffffff#ffffff#eee00e#eee00e#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#ffffff#ffffff#ffffff#eee00e#ffffff#eee00e#eee00e#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#ffffff#ffffff#eee00e#eee00e#eee00e#eee00e#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#eee00e#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#eee00e#eee00e#eee00e#eee00e#eee00e#eee00e#eee00e#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff")
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");
        var pic = new window.Picture({ col: picdata.col, row: picdata.raw, width: canvas.width, height: canvas.height, context: context });
        // console.log(picdata)
        pic.drawDataMatrix = pic.prase(picdata.paintdata);
        pic.toColorList();
        pic.toNumberDataMatrix();
        // console.log(pic)
        pic.drawNumber(context)
        pic.initdata();
        pic.inittable(context);


        pic.allowDraw(context)

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
        obj.initbackground(obj.context);

        obj.inittable(obj.context);
        obj.draw(obj.context);
        obj.drawNumber(obj.context);

    }
    function recall(){
        // obj.clearCanvas(obj.context);
        // obj.inittable(obj.context);
        // obj.drawNumber(obj.context);
        // obj.drawRecall(obj.context);
        console.log("该操作即将删除")
    }

    function finishDraw(){
        setW(false); 
        console.log(win);
        obj.initbackground(obj.context);
        // obj.draw(obj.context);
        obj.automaticPainting(obj.context)
        console.log(obj)
        console.log(obj.toString())
        // var img=obj.convertCanvasToImage(obj.context);
        // document.getElementById("show").appendChild(img)
    }


    function but(){
        console.log(1)
        var a = document.getElementById('aka')
        if(a.style.display=="none"){
            a.style.display="inline"
            console.log(a.style.display);
        }
        else{
            a.style.display="none"
            console.log(a.style.display);
        }
        console.log(11)
    }

    var $=window.$;
    var a;
        var b;
        $('#touch').on('touchmove', function(e) {
            // 阻止其他事件
            e.preventDefault();
            // 判断手指数量
            if (e.originalEvent.targetTouches.length == 1) {

                // 将元素放在滑动位置
                var touch = e.originalEvent.targetTouches[0];  

                console.log(touch.pageX)
                // console.log(touch.pageY)
                a=touch.pageX
                b=touch.pageY
                $("#touch").css({'left': touch.pageX + 'px',
                    'top': touch.pageY + 'px'});
            }
        });

        $('#touch').on('touchend', function(e) {
            // 阻止其他事件

                if(a>window.outerWidth-60){
                    a=window.outerWidth-60
                }
                else if(a<60){
                    a=0
                }
                else if(b>window.outerHeight-120){
                    b=window.outerHeight-120
                }
                else if(b<60){
                    b=0
                }
                // console.log(outerHeight)
            $("#touch").css({'left': a + 'px',
                    'top': b + 'px'});
        })



    var aa;
        var w=window.outerWidth;
        if(w<600){aa=300}
        else if(600<w&&w<1000){aa=500}
        else if(1000<w){aa=700}
    return (
        <div className="drawing">
            <div className="" style={{ width: "100%", margin: "auto", backgroundColor: "#ffffff" }}>
                <div className="drawing_canvas_div">
                    <canvas id="canvas" width={aa} height={aa}>您的浏览器版本过低</canvas>
                </div>
            </div>
            <div id="touch" className="drawing_shezhi_no1" onClick={but}>
            <b>工具</b>
            
            
            <div id="aka" className="drawing_shezhi" style={{marginTop:"40px",display:"none"}}>
            <div className="drawing_shezhi_no2">
                <div className="drawing_btn">
                    <button className="drawing_btn_no1" onClick={showNumber} >
                            显示数字
                            
                        </button>
                </div>
                <div className="drawing_btn">
                    <button className="drawing_btn_no1" onClick={recall}>
                        撤回
                    </button>
                </div>
                <div className="drawing_btn">
                    <button className="drawing_btn_no1" onClick={finishDraw}>
                        完成
                    </button>
                </div>
            </div>
             
        </div>
        </div>


            <div className="drawing_bottom">
            <div className="drawing_left">
                <div className="drawing_tuijian" onClick={Changetuijian} style={{color:color?"rgb(110,199,194)":"black"}}>推荐配色</div>
                <div className="drawing_free" onClick={Changefree}>自由配色</div>
            </div>
            <div className="drawing_right">
                <div style={{display:color?"block":"none"}}>
                    <div className="drawing_choose">
                        {
                            colorlist.map((item, idx) =>
                            <div key={idx} className="drawing_color">
                                <div className="drawing_color_div" 
                                onClick={() => { changeColor(item) }} 
                                style={{ backgroundColor: item }} 
                                key={item} >
                                    <p>{idx}</p>
                                    {console.log(item)}
                                </div>
                            </div>
                            )
                         }
                    </div>
                </div>
                <div>
                    <div className="drawing_color" style={{display:color?"none":"block"}}>
                        <Palette change={changeColorFree} />
                    </div>
                </div>
            </div>
        </div>
            {/* <div className="drawing_show" style={{display:win?"none":"block"}}>
            <div className="drawing_x"onClick={WSide}>X</div> 
            <div id="show">
            </div>
            <button className="drawing_Preservation" onClick={WSide}>保存图片到本地</button>
        </div> */}
        </div>
    )
}