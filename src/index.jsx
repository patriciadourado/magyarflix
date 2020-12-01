import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Colors from "./styles/settings/Colors";
import Reset from "./styles/Reset";
import Video from "./pages/Video";
import Home from "./pages/Home";

ReactDOM.render(
  <React.StrictMode>
    <Colors />
    <Reset />

    <BrowserRouter basename="/">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/video/new" component={Video} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
