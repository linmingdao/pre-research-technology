import React from "react";
import { Route } from "react-router-dom";

export function RouteWithSubRoutes(route: any) {
  return (
    <Route
      path={route.path}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}
