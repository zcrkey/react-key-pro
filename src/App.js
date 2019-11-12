import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Main from './portal/main/main';
import Login from './portal/login/login';
import Register from './portal/register/register';
import Home from './portal/home/home';

function App() {
  return (
    <BrowserRouter>
      {/* exact 严格匹配 */}
      <Route>
        <Route exact path="/" component={Main} />
        <Route path="/main" component={Main}>
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Route>
    </BrowserRouter>
  );
}

export default App;
