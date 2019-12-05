import React from 'react';
import { Link } from "react-router-dom";
import MainRouter from './main.router';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // 模式：development、production、test
    console.log("__NODE___：" + process.env.NODE_ENV);
  }

  componentWillUnmount() {

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
            用户信息
          </div>
        </div>
        <div className="key-app-body">
          <div className="key-app-sidebar">
            <Link to="/main/home">Home Page</Link>
            <Link to="/main/event-list">EventList Page</Link>
            <Link to="/main/icon">Icon Page</Link>
            <Link to="/main/style">Style Page</Link>
            <Link to="/main/request">Request Page</Link>
            <Link to="/main/openlayers">Openlayers Page</Link>

          </div>
          <div className="key-app-main">
            <div className="key-app-tab">
              标签栏
            </div>
            <div className="key-app-content">
              {/* <div>内容区</div> */}
              <MainRouter></MainRouter>
              {/* <div style={{ height: 900 }}></div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}