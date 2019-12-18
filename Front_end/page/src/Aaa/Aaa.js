import React, { Component } from 'react'
import './Aaa.css'
export default class Aaa extends Component {
    constructor(){
        super();
        this.state = {
            img:"http://47.97.90.172:8095/upload/1576668351926.png"
        }
    }

    componentDidMount() {
        console.log(this.props.bbb)
        if(this.props.bbb!=""){
            this.setState({img:"http://47.97.90.172:8095/upload/"+this.props.bbb+".png"})
        }
        // if(this.state.img!="http://localhost:8091/upload/1576668351926.png"){
        //     this.setState({img:"http://localhost:8091/upload/1576668351926.png"})
        // }else{
        //     fetch('http://localhost:8091/listt')
        //     .then(res=>res.json())
        //     .then(res=>{
        //         console.log(res.content)
        //         this.setState({img:"http://localhost:8091/upload/"+res.content+".png"})
        //         this.setState({
        //             a:res.content
        //         })
        //     })
        //     console.log(this.state.a)
        // }
    }
    
    previewFile=()=> {
        var preview = document.getElementsByClassName('edit_middle_img')[0];
        var file = document.querySelector('input[type=file]').files[0];
        var reader  = new FileReader();
        reader.onloadend = function (){
            preview.src = reader.result;
        }
        
        if(file){
            reader.readAsDataURL(file);
        }else{
            preview.src = "";
        }
    }


    
    render(){
        return(
            <div>
                
                <form target="nm_iframe" 
                method="post"
                enctype="multipart/form-data"
                action="http://47.97.90.172:8095/upload">
                    <div class="placeholder">
                        <div class="filename"></div>
                        <div class="webuploader-pick">
                            <img
                            className="edit_middle_img" 
                            src={this.state.img} 
                            onClick={()=>{
                                this._file.click()}}/>
                            <input 
                            className="Aaainput"
                            type="file"
                            name="file" 
                            ref={x=>this._file=x}
                            onChange={this.previewFile} 
                            id="file1"/>
                        </div>
                        <img className="img" src="" height="200"/>
                        
                        <input className="pick" type="submit" value="确认头像"/>
                    </div>
                </form>
                <iframe id="id_iframe" name="nm_iframe" style={{display:"none"}}></iframe>
            </div>
        )
    }
}