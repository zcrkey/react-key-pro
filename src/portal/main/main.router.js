import React from 'react';
import { Route } from "react-router-dom";
import Home from '../home/home';

function MainRouter() {
  return (
    <Route>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
    </Route>
  );
}

export default MainRouter;