import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./Pages/Home";

export default () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL + "/"}>
      <Route
        exact
        path={process.env.PUBLIC_URL + "/"}
        render={(props: any) => <Home {...props} />}
      />
    </HashRouter>
  );
};
