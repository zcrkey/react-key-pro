import React from 'react';
import { Switch, Route } from "react-router-dom";

// 404
import NoMatch from '../no-match/noMatch';

// 首页
import Home from '../../project/home/home';

// 事件
import EventList from '../../project/event/list';

// 图标库
import Icon from '../../project/icon/icon';

// 样式
import Style from '../../project/style/style';

// 数据请求
import Request from '../../project/request/request';

// Openlayers 地图
import Openlayers from '../../project/openlayers/openlayers';

export default class MainRouter extends React.Component {

  render() {
    return (
      <Switch>
        <Route exact path="/main" component={Home} />
        <Route path="/main/home" component={Home} />
        <Route path="/main/event-list" component={EventList} />
        <Route path="/main/icon" component={Icon} />
        <Route path="/main/style" component={Style} />
        <Route path="/main/request" component={Request} />
        <Route path="/main/openlayers" component={Openlayers} />
        {/* <Route path="*" component={NoMatch} /> */}
      </Switch >
    )
  }

}
