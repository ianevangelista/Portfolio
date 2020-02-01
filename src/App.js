// @flow
import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./Pages/Home";

export default () => {
  return (
    <HashRouter basename="/">
      <Route exact path="/" render={(props: any) => <Home {...props} />} />
    </HashRouter>
  );
};
