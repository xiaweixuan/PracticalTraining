import React from 'react'
import { TabBar } from 'antd-mobile';
import Database from '../Database/Database'
import Community from '../Community/Community'
import Mine from '../Mine/Mine'

 
export default class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
    };
  }
  render() {
    return (
      <div style={{position: 'fixed', height: '100%', width: '100%', top: 0}}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="yellow"
          barTintColor="white"
        >
          <TabBar.Item
            title="资料库"
            key="Life"
            icon={<i className='iconfont icon-home'></i>}
            selectedIcon= {<i style={{fontSize:'22px',lineHeight:'22px'}}className='iconfont icon-home'></i>}
   
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
          >
            <Database />
          </TabBar.Item>
          <TabBar.Item
            title="社区"
            key="Koubei"
            icon= {<i className='iconfont icon-linggan'></i>}
            selectedIcon={<i style={{fontSize:'22px',lineHeight:'22px'}}className='iconfont icon-linggan'></i>}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              console.log(1)
              this.setState({
                selectedTab: 'redTab',
              });
            }}
          >
         <Community />
          </TabBar.Item>
          <TabBar.Item
            icon={<i className='iconfont icon-shangcheng'></i>}
            selectedIcon={<i style={{fontSize:'22px',lineHeight:'22px'}}className='iconfont icon-shangcheng'></i>}
            title="我的"
            key="Friend"
            // dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              console.log(2)
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            <Mine />
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}