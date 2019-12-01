import React from 'react'
import { SketchPicker } from 'react-color';

export default class ColorSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color:props.color,
      key:props.objKey,
      displayColorPicker: "none",
    };
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick = ()=> {
    let {displayColorPicker,key,color} =this.state;
    displayColorPicker = displayColorPicker=="none"?"block":"none";
    this.setState({displayColorPicker})
    if(displayColorPicker){
        this.props.updateColor(key,color)
    }
  }
  handleChange = (value)=>{
      let color = value.hex;
      this.setState({color})
    
  }
  render() {
      let {color,displayColorPicker} = this.state;
    return (
      <div>
        <button onClick={ this.handleClick } style={{background:color,border:"none",lineHeight:"31px",height:31,width:45,verticalAlign: "middle"}}></button>
        {displayColorPicker=="block"?
        <div style={{position:"absolute",zIndex:66}}>
          
            <SketchPicker color={this.state.color}  onChange={this.handleChange} />
        </div>
        :null
        }
      </div>
    );
  }
}




