import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import HttpsRedirect from "react-https-redirect";
import { Provider } from "react-redux";
import "./index.css";
import store from "./store";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <HttpsRedirect>
      <Router>
        <App />
      </Router>
    </HttpsRedirect>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
