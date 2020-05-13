import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./Main";
import NotFoundPage from "./not-found-page/NotFoundPage";

export default () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route component={NotFoundPage} />
  </Switch>
);
