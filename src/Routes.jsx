import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Video from "./pages/Video";
import Home from "./pages/Home";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/video/new" component={Video} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
