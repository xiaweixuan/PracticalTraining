import React, { Component } from 'react'
import './App.css'
export default class Aaa extends Component {
    constructor(){
        super();
        let winW = document.documentElement.clientWidth,
        ratio = window.ratio;
        let W = winW - .4*ratio,
        H=W,
        MW=W*.7,
        MH=MW,
        ML=(W-MW)/2,
        MT=(H-MH)/2;
        
        this.state = {
            pic:"",
            W,H,MW,MH,ML,MT,
            S:false,
            base64:""
        }
    }
    
    change=(imagedata)=>{
        this.setState({
            pic:imagedata
        })
    }
    
    fileChange=()=>{
        this.setState({S:true});
        let picOM = this._file.files[0];
        if(! picOM) return;
        // console.log(picOM);
        // 从获取的文件对象中读取图片的数据（获取当前图片的base64码）
        let fileReade = new FileReader();
        fileReade.readAsDataURL(picOM);
        fileReade.onload = ev =>{
            let filebase64 =  ev.target.result;
            // base64编码保存
            this.setState({base64:filebase64});
            // 创建一张图片
            this.img = new Image();
            this.img.src = ev.target.result;
            this.img.onload=()=>{
                let n = 1,
                {W,H} = this.state;
                this.IW = this.img.width;
                this.IH = this.img.height;
                if(this.IW>this.IH){
                    n=this.IW/W;
                    this.IW=W;
                    this.IH=this.IH/n
                }else{
                    n=this.IH/H;
                    this.IH=H;
                    this.IW=this.IW/n
                }
                this.IL=(W-this.IW)/2;
                this.IT=(H-this.IH)/2;
                this.drawImage();
            }
        }
    }
    
    drawImage=()=>{
        let {W,H} = this.state;
        this.ctx = this._canvas.getContext('2d');
        this.ctx.clearRect(0,0,W,H);
        this.ctx.drawImage(this.img,this.IL,this.IT,this.IW,this.IH);
    }
    
    render() {
        let {W,H,MW,MH,ML,MT,S}=this.state;
        return (
            <div>
                <form target="nm_iframe" 
                method="post" 
                enctype="multipart/form-data" 
                action="http://47.97.90.172:8091/upload">
                    <div class="placeholder">
                        <div class="filename"></div>
                        <div class="webuploader-pick">
                            {/* <input type="file" name="file" id="file1"></input> */}
                            <div>
                                <input name="file" 
                                id="file1" 
                                type="image" 
                                className="imgBox" 
                                src={this.state.pic}/>
                            </div>
                            <div className="canvasBox_div"
                            onTouchStart={ev=>{
                                let point = ev.changedTouches[0];
                                this.startX = point.clientX;
                                this.startY = point.clientY;
                            }}
                            onTouchMove={ev=>{
                                let point = ev.changedTouches[0];
                                let changeX = point.clientX-this.startX,
                                changeY = point.clientY-this.startY;
                                if(Math.abs(changeX)>10 || Math.abs(changeY)>10){
                                    this.IL += changeX;
                                    this.IT += changeY;
                                    this.drawImage();
                                    this.startX = point.clientX;
                                    this.startY = point.clientY;
                                }
                            }}>
                                <canvas className="canvasBox"
                                ref = {x=>this._canvas = x}
                                width={W}
                                height={H}></canvas>
                                <div className="mark"
                                style={{
                                    width:MW+'px',
                                    height:MH+'px',
                                    left:ML+'px',
                                    top:MT+'px',
                                    display:S?'block':'none'}}></div>
                            </div>

                            <div>
                                <input type="file" 
                                name="file" 
                                id="file1" 
                                className="file" 
                                ref={x=>this._file=x}
                                onChange={this.fileChange}/>
                                
                                <button className="choose" 
                                onClick={ev=>{
                                    this._file.click();
                                }}>选择图片</button>
                                
                                <button onClick={ev=>{
                                    if(!this.img) return;
                                    this.IW+=10;
                                    this.IH+=10;
                                    this.drawImage();
                                }}>放大</button>
                                
                                <button onClick={ev=>{
                                    if(!this.img) return;
                                    this.IW-=10;
                                    this.IH-=10;
                                    this.drawImage();
                                }}>缩小</button>
                                
                                <button onClick={ev=>{
                                    if(!this.img) return;
                                    let imagedata = this.ctx.getImageData(ML,MT,MW,MH),
                                    canvas2 = document.createElement('canvas'),
                                    ctx2 = canvas2.getContext('2d');
                                    canvas2.width = MW;
                                    canvas2.height = MH;
                                    ctx2.putImageData(imagedata,0,0,0,0,MW,MH);
                                    this.change(canvas2.toDataURL("image/png"));
                                }}>确定</button>
                            </div>
                        </div>
                        
                        <div class="webuploader-pick">
                            <input  type="submit" value="提交"/>
                        </div>
                    </div>
                </form>
                <iframe id="id_iframe" name="nm_iframe" style={{display:"none"}}></iframe>
            </div>
        )
    }
}