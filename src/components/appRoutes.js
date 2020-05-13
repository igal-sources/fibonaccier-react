import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./Main";
import NotFoundPage from "./not-found-page/NotFoundPage";

export default (fibNumber) => (
  <Switch>
    <Route exact path="/" component={() => <Main fibNumber={fibNumber} />} />
    <Route component={NotFoundPage} />
  </Switch>
);
