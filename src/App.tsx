import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { routes } from "./router/router.cfg";
import { RouteWithSubRoutes } from "./router/router";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
