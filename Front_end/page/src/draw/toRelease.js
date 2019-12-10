import React, { useState, useEffect, useWindowWidth } from 'react'
import Palette from './palette'

export default function ToRelease() {
    var [obj, setObj] = useState({})
    var [win, setW] = useState(true);
    var [release, setRelease] = useState(false);
    var [paintImg, setPaintImg] = useState(<div></div>)
    
    useEffect(() => {
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");
        var pic = new window.Picture({ col: 20, row: 20, width: canvas.width, height: canvas.height, context: context });
        pic.initdata();
        pic.inittable(context);
        pic.allowDraw(context)
        setObj(pic);
    }, [])


    function changeColorFree(color) {
        console.log("自由改颜色");
        obj.color = color;
    }

    function showNumber() {
        // console.log(obj.drawDataMatrix);
        obj.initbackground(obj.context);

        obj.inittable(obj.context);
        obj.draw(obj.context);
        obj.drawNumber(obj.context);

    }
    function recall() {
        console.log("该操作即将删除")
    }

    function finishDraw() {
        setW(false);
        console.log(win);
        obj.initbackground(obj.context);
        // obj.draw(obj.context);
        obj.automaticPainting(obj.context)
        console.log(obj)
        console.log(obj.toString())
        var img=obj.convertCanvasToImage(obj.context);
        setPaintImg(img)
        // document.getElementById("show").appendChild(img)
        setRelease(true);
        var subData = {
            paintid: "",
            userid: "",
            paintdata: "",
            type: "person",
            describle: "",
            history: "",
            col: 20,
            raw: 20
        }

        // fetch("http://xiawx.top:8080/perpaint",{
        //     method:"POST",
        //     body:JSON.stringify(subData)
        // })
    }


    function but() {
        console.log(1)
        var a = document.getElementById('aka')
        if (a.style.display == "none") {
            a.style.display = "inline"
            console.log(a.style.display);
        }
        else {
            a.style.display = "none"
            console.log(a.style.display);
        }
        console.log(11)
    }

    var $ = window.$;
    var a;
    var b;
    $('#touch').on('touchmove', function (e) {
        // 阻止其他事件
        e.preventDefault();
        // 判断手指数量
        if (e.originalEvent.targetTouches.length == 1) {

            // 将元素放在滑动位置
            var touch = e.originalEvent.targetTouches[0];

            console.log(touch.pageX)
            // console.log(touch.pageY)
            a = touch.pageX
            b = touch.pageY
            $("#touch").css({
                'left': touch.pageX + 'px',
                'top': touch.pageY + 'px'
            });
        }
    });

    $('#touch').on('touchend', function (e) {
        // 阻止其他事件

        if (a > window.outerWidth - 60) {
            a = window.outerWidth - 60
        }
        else if (a < 60) {
            a = 0
        }
        else if (b > window.outerHeight - 120) {
            b = window.outerHeight - 120
        }
        else if (b < 60) {
            b = 0
        }
        // console.log(outerHeight)
        $("#touch").css({
            'left': a + 'px',
            'top': b + 'px'
        });
    })



    var aa;
    var w = window.outerWidth;
    if (w < 600) { aa = 300 }
    else if (600 < w && w < 1000) { aa = 500 }
    else if (1000 < w) { aa = 700 }
    return (
        <div className="torelease">
            <div className="" style={{ width: "100%", margin: "auto", backgroundColor: "#ffffff" }}>
                <div className="torelease_canvas_div">
                    <canvas id="canvas" width={aa} height={aa}>您的浏览器版本过低</canvas>
                </div>
            </div>
            <div id="touch" className="drawing_shezhi_no1" onClick={but}>
                <b>工具</b>


                <div id="aka" className="drawing_shezhi" style={{ marginTop: "40px", display: "none" }}>
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

                    <div className="drawing_free">自由配色</div>
                </div>
                <div className="drawing_right">
                    <div>
                        <div className="drawing_color" >
                            <Palette change={changeColorFree} />
                        </div>
                    </div>
                </div>
            </div>
            {
                release ? <div className="release_submit">
                    {/* <img src={}/> */}
                    {/* <textarea placeholder="描述一下你的图画吧" maxlength="50" draggable="false"></textarea> */}
                </div> : null
            }
        </div>
    )
}
