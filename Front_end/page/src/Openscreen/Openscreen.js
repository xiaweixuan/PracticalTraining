import React, { Component } from 'react'
import {Link } from 'react-router-dom';

import './Openscreen.css'

export default class Openscreen extends Component {
    componentDidMount(){
        setTimeout(() => {
            this.props.history.push('/database');
        }, 3000);
        // this.props.history.push('/database');
    }
    render() {
        return (
            <div className="openscreen">
                <img className="openscreen_img" src="img/openscreen.png"/>
                <div className="openscreen_img_jump">
                    <Link to="/database"><p>跳过</p></Link>
                </div>
            </div>
        )
    }
}
