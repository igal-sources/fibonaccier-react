import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Main from "./main-screen/Main";
import NotFoundPage from "./not-found-page/NotFoundPage";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);
