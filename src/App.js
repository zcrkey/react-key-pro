import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// 引入 fortawesome 图标库
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Main from './project/main/main';
import Login from './project/login/login';
import Register from './project/register/register';
import NoMatch from './project/no-match/noMatch';

// 全部引入
library.add(fas);

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* exact 严格匹配 */}
        <Route exact path="/" component={Main} />
        <Route path="/main" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
