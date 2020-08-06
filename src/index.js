import {

} from "./pages";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AppProvider from "./components/AppProvider/AppProvider";
import App from "./components/App";
import React from "react";
import registerServiceWorker from "./registerServiceWorker";
import { render } from "react-dom";

render(
  <AppProvider>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        {/*<Route exact path="/404" component={NotFound} />
        <Route exact path="/500" component={BackendError} />
        <Route exact path="/Lockscreen" component={Lockscreen} />
        <Route exact pth="/forgot" component={PasswordReset} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />*/}
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </AppProvider>,
  document.getElementById("root")
);

registerServiceWorker();
