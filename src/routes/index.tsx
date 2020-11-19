import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Time from "../pages/Time";
import Focus from "../pages/Focus";
import Explode from "../pages/Explode";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/time" exact component={Time} />
    <Route path="/focus" exact component={Focus} />
    <Route path="/explode" exact component={Explode} />
  </Switch>
);

export default Routes;
