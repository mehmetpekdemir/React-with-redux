import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

import configureStore from "./redux/config/configureStore";

const store = configureStore();

const { PUBLIC_URL } = process.env;

ReactDOM.render(
  <React.StrictMode>
    <App store={store} basename={PUBLIC_URL} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
