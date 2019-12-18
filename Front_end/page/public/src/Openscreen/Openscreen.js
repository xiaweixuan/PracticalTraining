import React, { Component } from 'react'
import {Link } from 'react-router-dom';

import './Openscreen.css'

export default class Openscreen extends Component {
    componentDidMount(){
        this.time= setTimeout(() => {
            this.props.history.push('/database');
        }, 3000);
    }
    jump=()=>{
        clearTimeout(this.time);
    }
    render() {
        return (
            <div className="openscreen">
                <img className="openscreen_img" src="http://xiawx.top:8080/img"/>
                <div className="openscreen_img_jump">
                    <Link to="/database" onClick={this.jump}><p>跳过</p></Link>
                </div>
            </div>
        )
    }
}
