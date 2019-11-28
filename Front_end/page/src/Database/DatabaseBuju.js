import { Flex, WhiteSpace } from 'antd-mobile';
import React from 'react'
import {HashRouter as Router,Link} from 'react-router-dom';
const PlaceHolder = ({ className = '', ...restProps })=>(
	<div className={`${className} placeholder`} {...restProps}>
		<div className="databaseBuju_views">
			<Router>
				<Link to="/xiangqing">
					<img src="img/mine_message_img.png"/>
				</Link>
			</Router>
			<div className="databaseBuju_views_bottom">
				<img src="img/mine_message_img.png"/>
			</div>
			<div className="databaseBuju_name">xx官方</div>
			<i className='iconfont icon-shoucang1'></i>
		</div>
	</div>
)

const HomeBuju = () => (
	<div className="databaseBuju_root">
		<div className="databaseBuju_root_no2">
			<Flex>
				<Flex.Item>
					<PlaceHolder/>
				</Flex.Item>

				<Flex.Item>
					<PlaceHolder/>
				</Flex.Item>
			</Flex>
			<WhiteSpace size="lg" />
			<Flex>
				<Flex.Item>
					<PlaceHolder/>
				</Flex.Item>
				
				<Flex.Item>
					<PlaceHolder/>
				</Flex.Item>
			</Flex>
			<WhiteSpace size="lg" />
		</div>
	</div>
)
export default HomeBuju;