import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Undertab.css'

export default class Undertab extends Component {
	render() {
		return (
			<div className='Undertab_div'>
				<header>
					<div>
						<Link to='/database'>
							<div style={{color:this.props.flag=="1"?"rgb(110,199,194)":"black"}} 
							className='Undertab_link_content' onClick={this.changeColor_1}>
								<i id="icon" className="iconfont icon-ziliaoku1"></i>
								<p className='ziliao'>资料库</p>
							</div>
						</Link>
						
						<Link to='/community'>
							<div style={{color:this.props.flag=="2"?"rgb(110,199,194)":"black"}} 
							className='Undertab_link_content' onClick={this.changeColor_2}>
								<i id="icon" className="iconfont icon-shequxianxing"></i>
								<p className='ziliao'>社区</p>
							</div>
						</Link>

						<Link to='/mine'>
							<div style={{color:this.props.flag=="3"?"rgb(110,199,194)":"black"}} 
							className='Undertab_link_content' onClick={this.changeColor_3}>
								<i id="icon" className="iconfont icon-wode"></i>
								<p className='ziliao'>我的</p>
							</div>
						</Link>
					</div>
				</header>
			</div>
		)
	}
}