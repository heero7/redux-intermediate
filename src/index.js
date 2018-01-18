import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route } from "react-router-dom";
import promiseMiddleware from 'redux-promise';
import "./app.css";

import reducers from './reducers';

import App from "./components/app";

// Routes
import Car from "./containers/car";

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/cars/:id" component={Car} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
