import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import Home from './home'

export default () => (
  <div>
    <Switch>
      <Route path={"/"} exact={true} component={Home} />
    </Switch>
  </div>
);
