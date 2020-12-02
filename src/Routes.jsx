import React from "react";
import { Route, HashRouter } from "react-router-dom";

import Video from "./pages/Video";
import Home from "./pages/Home";

function Routes() {
  return (
    <HashRouter basename="/">
      <Route path="/" exact component={Home} />
      <Route path="/video/new" component={Video} />
    </HashRouter>
  );
}

export default Routes;
