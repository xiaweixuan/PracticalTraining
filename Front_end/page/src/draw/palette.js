import React,{useEffect,useState} from 'react'
import { SketchPicker } from 'react-color';


/**
 * 
 * 使用方法：
 * 
 * 
 */

 
export default function Palette(props){
    // console.log();
    // props.change()
    var [displayColorPicker,setDisplayColorPicker]=useState("none");
    var [color,setColor]=useState("#ffffff")

    function showPalette(){
        console.log("改变颜色")
        if(displayColorPicker=="block"){
            setDisplayColorPicker("none")
        }else{
            setDisplayColorPicker("block")
        }
        
    }
    function changeColor(value){
        setColor(value.hex)
        setDisplayColorPicker("none")
        props.change(value.hex)
    }


    return (<div className="palette">
        <div className="palette_btn" onClick={showPalette} style={{background:color}}></div>
        {displayColorPicker=="block"?
        <div style={{position:"absolute"}}>
            <SketchPicker color={color} onChange={changeColor} />
        </div>
        :null
        }
        
    </div>)
}