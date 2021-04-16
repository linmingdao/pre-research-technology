import React, { Suspense } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { routes } from "./router/router.cfg";
import { RouteWithSubRoutes } from "./router/router";
import Loading from "./components/Loading/Loading";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
