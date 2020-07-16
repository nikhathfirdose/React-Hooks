import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import Container from "./containers/container";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers/reducers1";
import { createStore } from "redux";

let store = createStore(rootReducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Container />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
