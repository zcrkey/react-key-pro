import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from './project/main/main';
import Login from './project/login/login';
import Register from './project/register/register';
import NoMatch from './project/no-match/noMatch';

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
