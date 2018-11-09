import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../../src/App";

const middlewares = [thunk];
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
