import React, { Component } from 'react';
import Routes from './routes';
import {HashRouter as Router} from 'react-router-dom';

import Sider from './Sider/Sider';

export default class App extends Component {
  render() {
    return (
      <div>
          <Router>
            <Sider/>
            <Routes/>
          </Router>
      </div>
    )
  }
}

