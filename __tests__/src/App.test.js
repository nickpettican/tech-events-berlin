import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../../src/App";

const middlewares = [];
const mockStore = configureStore(middlewares);

it("renders without crashing", () => {
  const initialState = {
    app: {
      isLoading: false
    }
  };
  const store = mockStore(initialState);
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
