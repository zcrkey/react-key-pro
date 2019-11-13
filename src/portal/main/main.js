import React from 'react';
import { Route } from "react-router-dom";
import Home from '../home/home';
import MainRouter from './main.router';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="key-app">
        <div className="key-app-header">
          <div className="key-app-logo">
            Logo
          </div>
          <div className="key-app-menu">
            菜单栏
          </div>
          <div className="key-app-user">
            信息
          </div>
        </div>
        <div className="key-app-body">
          <div className="key-app-sidebar">
            侧边栏
          </div>
          <div className="key-app-main">
            <div className="key-app-tab">
              标签栏
            </div>
            <div className="key-app-content">
              内容区
              {/* {MainRouter} */}
              <Route path="/home">
                <h3>Please select a topic.</h3>
              </Route>
              <div style={{ height: 900 }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}