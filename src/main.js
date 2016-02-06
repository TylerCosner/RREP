import { createDevTools } from "redux-devtools";
import LogMonitor from "redux-devtools-log-monitor";
import DockMonitor from "redux-devtools-dock-monitor";

import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import promiseMiddleware from "redux-promise";
import { Provider } from "react-redux";
import { Router, Route, IndexRoute } from "react-router";
import createHistory from "history/lib/createBrowserHistory";
import { syncHistory, routeReducer } from "react-router-redux";

import "purecss";
import "./styles/main.scss";

import * as reducers from "./reducers";
import routes from "./routes";

const history = createHistory();
const middleware = syncHistory(history);
const reducer = combineReducers({
  ...reducers,
  routing: routeReducer
});

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h"
               changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" />
  </DockMonitor>
);

const finalCreateStore = compose(
  applyMiddleware(promiseMiddleware, middleware),
  DevTools.instrument()
)(createStore);

const store = finalCreateStore(reducer);
middleware.listenForReplays(store);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history} routes={routes} />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById("app")
);
