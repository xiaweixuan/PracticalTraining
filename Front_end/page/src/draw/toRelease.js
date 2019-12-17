import React, { useState, useEffect, useWindowWidth } from 'react'
import Palette from './palette'
import {Link} from 'react-router-dom'
import './draw.css'
import store from '../store';
import { LoginchangeValueName, LoginchangeValuePassword, Motto, ChangeUserid,Email,changeValueeee} from '../actions';
export default function Drawing(props) {
    let [userid, setUser] = useState(store.getState().ChangeUserid);
    let [paintid, setPaintid] = useState(store.getState().ChangeUserid+new Date().getTime());
    var [colorlist, setColorlist] = useState([])
    var [obj, setObj] = useState({})

    var [color, setColor] = useState(true);
    var [win, setW] = useState(true);
    var [type,setType]=useState('');
    var [describe,setDes]=useState('');
    let [jugde,setJugde] = useState(store.getState().loginstateflag);
    function displayjudge(){
        setJugde(true);
    }
    function Changefree() {
        setColor(false);
    }
    function Changetuijian() {
        setColor(true);
    }
    function handletype(e){
        setType(e.target.value);
    }
    function handledes(e){
        setDes(e.target.value);
    }
    useEffect(() => {
        var canvas = document.getElementById("canvas");

        var context = canvas.getContext("2d");
        var pic = new window.Picture({ col: 20, row: 20, width: canvas.width, height: canvas.height, context: context });

        pic.initdata();
        pic.allowDraw(context)
        setColorlist(pic.colorList);
        setObj(pic);

    }, [])

    function changeColorFree(color) {
        console.log("自由改颜色");
        obj.color = color;
    }

    function showNumber() {
        // console.log(obj.drawDataMatrix);
        obj.initbackground(obj.context);

        obj.inittableOl(obj.context);
        obj.draw(obj.context);
        obj.drawNumber(obj.context);

    }
    function recall() {
        // obj.clearCanvas(obj.context);
        // obj.inittable(obj.context);
        // obj.drawNumber(obj.context);
        // obj.drawRecall(obj.context);
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
        // var img=obj.convertCanvasToImage(obj.context);
        // document.getElementById("show").appendChild(img)
    }
    function correctColor() {
        obj.correctColor(obj.context);
    }
    function per(){
        fetch('http://xiawx.top:8080/perpaint', {
            body: JSON.stringify({
                paintid:paintid,userid: userid,paintdata:obj.toString(),type:type,describe:describe,history:null,col:'20',raw:'20'
            }),
            method: 'POST',
        })
            .then(res => res.json())
            .then(res => {
                var data = res.content;
                console.log(data);
                if (data == true) {

                    props.history.push('/database')
                }
            })
    }
    var $ = window.$;
    var bottom = document.getElementsByClassName('bottom')
    var bottom2 = document.getElementsByClassName('bottom2')
    var bottom3 = document.getElementsByClassName('bottom3')
    var a;
    var b;
    function but() {
        if (bottom[0].style.margin == "") {
            bottom[0].style.margin = "70px 0px 0px 5px"
            bottom2[0].style.margin = "120px 0px 0px 5px"
            bottom3[0].style.margin = "170px 0px 0px 5px"
        }
        else if (bottom[0].style.margin == "0px") {
            bottom[0].style.margin = "70px 0px 0px 5px"
            bottom2[0].style.margin = "120px 0px 0px 5px"
            bottom3[0].style.margin = "170px 0px 0px 5px"
        }
        else {
            bottom[0].style.margin = "0px 0px 0px 0px"
            bottom2[0].style.margin = "0px 0px 0px 0px"
            bottom3[0].style.margin = "0px 0px 0px 0px"
        }
        console.log(bottom[0].style.margin)
        console.log(bottom[0].style.margin == "70px 0px 0px 5px")
    }
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
            $("#touch").css({ 'left': touch.pageX + 'px', 'top': touch.pageY + 'px' });
        }
    });

    $('#touch').on('touchend', function (e) {
        // 阻止其他事件
        if (a > window.outerWidth - 120) {
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
        $("#touch").css({ 'left': a + 'px', 'top': b + 'px' });
    })



    var aa;
    var w = window.outerWidth;
    if (w < 600) { aa = 300 }
    else if (600 < w && w < 1000) { aa = 500 }
    else if (1000 < w) { aa = 700 }
    return (
        <div className="drawing">
            <div>
                <div className="xiangqing_header">
                    <Link to='/database' className="xiangqing_header_i">
                        <i className="iconfont icon-fanhui"></i>
                    </Link>
                        
                    <div className="xiangqing_header_i_no2">
                        <i className="iconfont icon-shoucang1"></i>
                    </div>
                </div>
            </div>
            <div className="torelease_text_no1">
                <div classNmae="torelease_text_miaoshu">类型（植物/动物/其他）</div>
                <input type='text' onChange={handletype}></input>
            </div>
            <div className="torelease_text">
                <div classNmae="torelease_text_miaoshu">详情描述</div>
                <input type='text' onChange={handledes}></input>
            </div>
            <div>
                <div className="drawing_canvas_div1">
                    <canvas id="canvas" width={aa} height={aa}>您的浏览器版本过低</canvas>
                </div>
            </div>

            <div id="touch" class="bt-box" >
                <a onClick={but} class="xiaoA bg-3">工具</a>
                <p  class="bottom bt-box-p">显示数字</p>
                <p  class="bottom2 bt-box-p">配色纠正</p>
                <p onClick={finishDraw} class="bottom3 bt-box-p">完成</p>
            </div>
            <div className="drawing_bottom" style={{ display: win ? 'block' : 'none' }}>
                <div className="drawing_left">
                    <div className="drawing_free" onClick={Changefree} style={{ color: color ? "black" : "rgb(110,199,194)" }}>自由配色</div>
                </div>
                <div className="drawing_right">
                    <div>
                        <div className="drawing_color" >
                            <Palette change={changeColorFree} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='drawing_bottom_no1' style={{ display: win ? 'none' : 'block' }} onClick={per}>发布</div>
            <div className="denglu_false" style={{display:jugde?"none":"block"}}>
                    <p>请先登录</p>
                    <div className="denglu_false_but">
                        <button className="denglu_false_but_no1" onClick={displayjudge}>确定</button>
                        <button className="denglu_false_but_no1" onClick={displayjudge}>返回</button>
                        <div className="denglu_clearfloat"></div>
                    </div>
                    
                </div>
                <div className="denglu_shadow" style={{display:jugde?"none":"block"}}></div>
            <div className="none"></div>
        </div>
    )
}