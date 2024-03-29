import React from "react";
import {Route, Redirect} from "react-router";

import App             from "./containers/App";
import Account from "./components/Account";
import Preferences from "./components/Preferences";

export default (
  <Route path="/" component={App}>
  	<Route path="account" component={Account} />
	<Route path="preferences" component={Preferences} />
  </Route>
);

