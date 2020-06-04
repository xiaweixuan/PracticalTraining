import React, { useState, useEffect,push} from 'react'
import Palette from './palette'
import store from '../store';
import './draw.css'
import {Link} from 'react-router-dom'
export default function Drawing(props) {
    let [userid, setUser] = useState(store.getState().ChangeUserid);
    let [paintid, setPaintid] = useState(store.getState().ChangeUserid+new Date().getTime());
    var [picdata, setPicdata] = useState(props.data);
    var [showColor,setShowColor]=useState(1);
    var [colorlist, setColorlist] = useState([])
    var [obj, setObj] = useState({})
    var [color, setColor] = useState(true);
    var [win, setW] = useState(true);
    let [jugde,setJugde] = useState(store.getState().loginstateflag);
    
    function displayjudge(){
        setJugde(true);
    }
    function Changefree(){
        setColor(false);  
    }
    function Changetuijian(){
        setColor(true); 
    }
    function work(){
        fetch('http://xiawx.top:8080/savework',{
            body: JSON.stringify({
                paintid:paintid,userid: userid,paintdata:obj.toString(),history:null
            }),
            method: 'POST',
        })
        .then(res => res.json())
        .then(res => {
            var data = res.content;
            if (data == true) {
                props.history.push('/mine')
            }
        })
    }
    
    useEffect(() => {
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");
        var pic = new window.Picture({
            col: picdata.col, 
            row: picdata.raw, 
            width: canvas.width,
            height: canvas.height,
            context: context });
            pic.drawDataMatrix = pic.prase(picdata.paintdata);
            pic.drawDataMatrix_abiding=[...pic.drawDataMatrix];
            pic.toColorList();
            pic.toNumberDataMatrix();
            pic.numberDataMatrix_abiding=[...pic.numberDataMatrix];
            pic.drawNumber(context)
            pic.initdata();
            pic.inittableOl(context);
            pic.allowDraw(context)
            setColorlist(pic.colorList);
            setObj(pic);
        },[])
    
        function changeColor(item,idx) {
            obj.initbackground(obj.context)
            obj.inittableOl(obj.context);
            obj.draw(obj.context)
            obj.drawNumber(obj.context)
            obj.color = item;
            obj.showNowColor(obj.context,idx)
        }
    
        function changeColorFree(color) {
            obj.color = color;
        }
    
        function showNumber(){
            obj.initbackground(obj.context);
            obj.inittableOl(obj.context);
            obj.draw(obj.context);
            obj.drawNumber(obj.context);
        }
    
        function recall() {
            obj.clearCanvas(obj.context);
            obj.inittable(obj.context);
            obj.drawRecall(obj.context);
        }
    
        function finishDraw(){
            setW(false); 
            obj.initbackground(obj.context);
            obj.automaticPainting(obj.context)
            obj.unallowdraw(obj.context);
        }
    
        function correctColor(){
            obj.correctColor(obj.context);
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
            }
            else if(bottom[0].style.margin == "0px") {
                bottom[0].style.margin = "70px 0px 0px 5px"
                bottom2[0].style.margin = "120px 0px 0px 5px"
            }
            else{
                bottom[0].style.margin="0px 0px 0px 0px"
                bottom2[0].style.margin="0px 0px 0px 0px"
            }
        }
    
        $('#touch').on('touchmove', function(e) {
            e.preventDefault();
            if (e.originalEvent.targetTouches.length == 1) {
                var touch = e.originalEvent.targetTouches[0]; 
                a=touch.pageX
                b=touch.pageY
                $("#touch").css({'left': touch.pageX + 'px','top': touch.pageY + 'px'});
            }
        })
    
        $('#touch').on('touchend', function(e) {
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
                b=60
            }
            $("#touch").css({'left': a + 'px','top': b + 'px'});
        })
    
        var aa;
        var w=window.outerWidth;
        
        if(w<600){
            aa=300
        }
        else if(600<w&&w<1000){
            aa=500
        }
        else if(1000<w){
            aa=700
        }
        return(
            <div className="drawing">
                <div>
                    <div className="drawing_canvas_div">
                        <canvas id="canvas" 
                        width={aa} 
                        height={aa}>
                            您的浏览器版本过低
                        </canvas>
                    </div>
                </div>
                
                <div id="touch" class="bt-box" >
                    <a onClick={but} class="xiaoA bg-3">工具</a>
                    <p onClick={correctColor} class="bottom bt-box-p">配色纠正</p>
                    <p onClick={finishDraw} class="bottom2 bt-box-p">完成</p>
                </div>
                
                <div className="drawing_bottom" 
                style={{display:win?'block':'none'}}>
                    <div className="drawing_left">
                        <div className="drawing_tuijian" 
                        onClick={Changetuijian} 
                        style={{color:color?"rgb(110,199,194)":"black"}}>
                            推荐配色
                        </div>
                        <div className="drawing_free" 
                        onClick={Changefree} 
                        style={{color:color?"black":"rgb(110,199,194)"}}>
                            自由配色
                        </div>
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
                                        key={item}>
                                            <p>{idx}</p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div>
                        <div className="drawing_color" 
                        style={{display:color?"none":"block"}}>
                            <Palette change={changeColorFree} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='drawing_bottom_no1'
            style={{display:win?'none':'block'}}
            onClick={work}>
                保存到我的作品
            </div>
            <div className="denglu_false" 
            style={{display:jugde?"none":"block"}}>
                <p>请先登录</p>
                <div className="denglu_false_but">
                    <Link to="/denglu">
                    <button className="denglu_false_but_no1" 
                    onClick={displayjudge}>确定</button>
                    </Link>
                    <Link to="/database">
                        <button className="denglu_false_but_no1" 
                        onClick={displayjudge}>返回</button>
                    </Link>
                    <div className="denglu_clearfloat"></div>
                </div>
            </div>
            
            <div className="denglu_shadow" 
            style={{display:jugde?"none":"block"}}></div>
            <div className="none"></div>
        </div>
    )
}