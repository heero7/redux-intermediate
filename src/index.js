import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route } from "react-router-dom";
import "./app.css";

import reducers from './reducers';

import App from "./components/app";

// Routes
import Car from "./components/car";

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/car/:id" component={Car} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
