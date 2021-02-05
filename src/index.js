import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.min.css";

import { Routes } from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import configureStore from "./redux/config/configureStore";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
