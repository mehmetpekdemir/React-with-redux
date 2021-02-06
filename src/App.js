import React from "react";

import { Routes } from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import ErrorHandler from "./common/utils/ErrorHandler";

function App({ store, basename }) {
  return (
    <Provider store={store}>
      <BrowserRouter basename={basename}>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default ErrorHandler(App);
