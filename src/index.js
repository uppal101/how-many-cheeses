import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import promiseMiddleware from "redux-promise-middleware";

import App from "./App";
import rootReducer from "./reducers/RootReducer";
import "./index.css";


// take out any code that you're not using.

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
   applyMiddleware(promiseMiddleware())
 ));


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
