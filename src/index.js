import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import AdminRegister from "./components/Auth/AdminRegister";
import AdminLogin from "./components/Auth/AdminLogin";
import DoctorList from "./components/MainFlow/DoctorList";

import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(thunk, promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/doctorslist" component={DoctorList} />
          <Route path="/register" component={AdminRegister} />
          <Route path="/" component={AdminLogin} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container")
);
