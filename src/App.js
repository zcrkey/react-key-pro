import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Main from './portal/main/main';
import Login from './portal/login/login';
import Register from './portal/register/register';

function App() {
  return (
    <BrowserRouter>
      {/* exact 严格匹配 */}
      <Route exact path="/" component={Main} />
      <Route path="/main" component={Main} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </BrowserRouter>
  );
}

export default App;
