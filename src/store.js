import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

const composer =
  window.location.host.includes("localhost") &&
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    : compose(applyMiddleware(...middleware));

const store = createStore(rootReducer, initialState, composer);

export default store;
