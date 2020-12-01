import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";

import Colors from "./styles/settings/Colors";
import Reset from "./styles/Reset";
import Video from "./pages/Video";
import Home from "./pages/Home";

ReactDOM.render(
  <React.StrictMode>
    <Colors />
    <Reset />

    <HashRouter>
        <Route path="/" exact component={Home} />
        <Route path="/video/new" exact component={Video} />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
