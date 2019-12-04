import React from 'react';
import { Switch, Route } from "react-router-dom";

// 首页
import Home from '../home/home';

// 404
import NoMatch from '../no-match/noMatch';

// 事件
import EventList from '../event/list';

// 图标库
import Icon from '../icon/icon';

// 样式
import Style from '../style/style';

// Openlayers 地图
import Openlayers from '../openlayers/openlayers';

export default class MainRouter extends React.Component {

  render() {
    return (
      <Switch>
        <Route exact path="/main" component={Home} />
        <Route path="/main/home" component={Home} />
        <Route path="/main/event-list" component={EventList} />
        <Route path="/main/icon" component={Icon} />
        <Route path="/main/style" component={Style} />
        <Route path="/main/openlayers" component={Openlayers} />
        <Route path="*" component={NoMatch} />
      </Switch >
    )
  }

}
