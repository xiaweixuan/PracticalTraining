import React,{useEffect,useState} from 'react'
import { SketchPicker } from 'react-color';


/**
 * 
 * 使用方法：
 * 
 * 
 */

 
export default function Palette(props,e){
    var [displayColorPicker,setDisplayColorPicker]=useState("none");
    var [color,setColor]=useState("#000")

    var $ = window.$;
    if(displayColorPicker=="block"){
        $("body").click(function(e){
            // e.stopPropagation();
            var _con = $('pelette_color');
            if(!_con.is(e.target)){
                setDisplayColorPicker("none");
            }
        })
    }
    function showPalette(){
        console.log(displayColorPicker)
        if(displayColorPicker=="block"){
            setDisplayColorPicker("none")
        }else{
            setDisplayColorPicker("block")
        }
        // console.log(displayColorPicker);
    }
    function changeColor(value){
        setColor(value.hex)
        // setDisplayColorPicker("none")
        props.change(value.hex)
    }

    var aa;
    var w=window.outerWidth;
    if(w<600){aa=200}
    else if(600<w<1000){aa=300}
    else if(w>1000){aa=300}

    return (<div className="palette">
        <div className="palette_btn" onClick ={showPalette} style={{background:color}}></div>
        {displayColorPicker=="block"?
        <div className="pelette_color">
            <SketchPicker width={aa} color={color} onChange={changeColor}/>
        </div>
        :null
        }
        
    </div>)
}