import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// 引入 fortawesome 图标库
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Other from './portal/other/other';
import NoMatch from './portal/no-match/noMatch';

// 全部引入
library.add(fas);

function App() {
  // 老浏览器提供的 hash模式， 我们称之为： HashRouter
  // H5提供的的 hsitory 模式，我们称之为 BrowserRouter
  // 注意： H5模式的路由需要后端支持
  return (
    <HashRouter>
      <Switch>
        {/* exact 严格匹配 */}
        <Route exact path="/" component={Other} />
        <Route path="/other" component={Other} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </HashRouter>
  );
}

export default App;
