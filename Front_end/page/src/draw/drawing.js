import React, { useState, useEffect, useWindowWidth } from 'react'
import Palette from './palette'

import './draw.css'
export default function Drawing(props) {

    var [picdata, setPicdata] = useState(props.data);
    var [showColor,setShowColor]=useState(1);
    var [colorlist, setColorlist] = useState([])
    var [obj, setObj] = useState({})

    var [color, setColor] = useState(true);
    var [win, setW] = useState(true);
    function Changefree(){
        setColor(false);  
    }
    function Changetuijian(){
        setColor(true); 
    }

    useEffect(() => {
        // setPicdata("#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#eee00e#eee00e#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#eee00e#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#eee00e#eee00e#ffffff#eee00e#eee00e#eee00e#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#ffffff#eee00e#eee00e#ffffff#ffffff#eee00e#ffffff#eee00e#ffffff#eee00e#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#eee00e#eee00e#ffffff#eee00e#eee00e#eee00e#eee00e#ffffff#ffffff#eee00e#eee00e#eee00e#ffffff#eee00e#ffffff#ffffff#eee00e#ffffff#ffffff#eee00e#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#eee00e#eee00e#ffffff#ffffff#eee00e#ffffff#ffffff#eee00e#eee00e#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#ffffff#ffffff#ffffff#eee00e#ffffff#eee00e#eee00e#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#ffffff#ffffff#eee00e#eee00e#eee00e#eee00e#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#eee00e#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#eee00e#eee00e#eee00e#eee00e#eee00e#eee00e#eee00e#eee00e#eee00e#eee00e#ffffff#ffffff#ffffff#eee00e#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff")
        var canvas = document.getElementById("canvas");
        // canvas.addEventListener("touchstart",()=>{
        //     setShowColor(obj.scale)
        // })
        var context = canvas.getContext("2d");
        var pic = new window.Picture({ col: picdata.col, row: picdata.raw, width: canvas.width, height: canvas.height, context: context });
        // console.log(picdata)
        pic.drawDataMatrix = pic.prase(picdata.paintdata);
        pic.drawDataMatrix_abiding=[...pic.drawDataMatrix];
        pic.toColorList();
        pic.toNumberDataMatrix();
        pic.numberDataMatrix_abiding=[...pic.numberDataMatrix];
        // console.log(pic)
        pic.drawNumber(context)
        pic.initdata();
        pic.inittableOl(context);
        pic.allowDraw(context)
        setColorlist(pic.colorList);
        setObj(pic);      
        console.log(pic.drawDataMatrix_abiding)
        // if(obj.scale<1.2&&obj.scale===1.2){
        //     console.log(1)
        //     obj.drawGreyShadow(obj.context)
        // }
    }, [])

    function changeColor(item,idx) {
        obj.initbackground(obj.context)
        obj.inittableOl(obj.context);
        obj.draw(obj.context)
        obj.drawNumber(obj.context)
        obj.allowDraw(obj.context)
        console.log(item)
        obj.color = item;
        obj.showNowColor(obj.context,idx)
    }

    function changeColorFree(color) {
        console.log("自由改颜色");
        obj.color = color;
    }

    function showNumber(){
        // console.log(obj.drawDataMatrix);
        obj.initbackground(obj.context);

        obj.inittableOl(obj.context);
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

    var $=window.$;
    var bottom = document.getElementsByClassName('bottom')
    var bottom2 = document.getElementsByClassName('bottom2')
    var bottom3 = document.getElementsByClassName('bottom3')
    var a;
    var b;
    function but(){
        if(bottom[0].style.margin==""){
            bottom[0].style.margin="70px 0px 0px 5px"
            bottom2[0].style.margin="120px 0px 0px 5px"
            bottom3[0].style.margin="170px 0px 0px 5px"
        }
        else if(bottom[0].style.margin=="0px"){
            bottom[0].style.margin="70px 0px 0px 5px"
            bottom2[0].style.margin="120px 0px 0px 5px"
            bottom3[0].style.margin="170px 0px 0px 5px"
        }
        else{
            bottom[0].style.margin="0px 0px 0px 0px"
            bottom2[0].style.margin="0px 0px 0px 0px"
            bottom3[0].style.margin="0px 0px 0px 0px"
        }
        console.log(bottom[0].style.margin)
        console.log(bottom[0].style.margin == "70px 0px 0px 5px")
    }
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
            $("#touch").css({'left': touch.pageX + 'px','top': touch.pageY + 'px'});
        }
    });

    $('#touch').on('touchend', function(e) {
        // 阻止其他事件
        if(a>window.outerWidth-120){
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
        $("#touch").css({'left': a + 'px','top': b + 'px'});
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
            
            <div id="touch" class="bt-box" >
                <a onClick={but} class="xiaoA bg-3">工具</a>
                <p onClick={showNumber} class="bottom bt-box-p">显示数字</p>
                <p onClick={recall} class="bottom2 bt-box-p">撤回</p>
                <p onClick={finishDraw} class="bottom3 bt-box-p">完成</p>
            </div>


            <div className="drawing_bottom">
            <div className="drawing_left">
                <div className="drawing_tuijian" onClick={Changetuijian} style={{color:color?"rgb(110,199,194)":"black"}}>推荐配色</div>
                <div className="drawing_free" onClick={Changefree} style={{color:color?"black":"rgb(110,199,194)"}}>自由配色</div>
            </div>
            <div className="drawing_right">
                <div style={{display:color?"block":"none"}}>
                    <div className="drawing_choose">
                        {
                            colorlist.map((item, idx) =>
                            <div key={idx} className="drawing_color">
                                <div className="drawing_color_div" 
                                onClick={() => { changeColor(item,idx) }} 
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
        </div>
    )
}