
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {createStore, compose, applyMiddleware } from 'redux';
import allReducers from './components/reducers'
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import App from "./components/App";
import React from "react";
import registerServiceWorker from "./registerServiceWorker";
import { render } from "react-dom";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    allReducers,
    composeEnhancer(applyMiddleware(thunk)),
);

render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
