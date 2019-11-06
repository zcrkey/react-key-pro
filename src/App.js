import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Main from './html/main/main';
import Login from './html/login/login';

function App() {
  return (
    <BrowserRouter>
      {/* exact 严格匹配 */}
      <Route exact path="/" component={Main} />
      <Route exact path="/main" component={Main} />
      <Route path="/login" component={Login} />
    </BrowserRouter>
  );
}

export default App;
