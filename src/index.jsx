import React from "react";
import ReactDOM from "react-dom";
import Colors from "./styles/settings/Colors";
import Reset from "./styles/Reset";
import Routes from "./Routes";

ReactDOM.render(
  <React.StrictMode>
    <Colors />
    <Reset />

    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
