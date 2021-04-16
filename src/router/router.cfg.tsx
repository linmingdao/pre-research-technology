import { lazy } from "react";

export const routes = [
  {
    path: "/error",
    component: lazy(() => import("../pages/Error/Error")),
  },
  {
    path: "/404",
    component: lazy(() => import("../pages/NotFound/NotFound")),
  },
  {
    path: "/",
    component: lazy(() => import("../pages/Home/Home")),
    routes: [
      {
        path: "/flow",
        component: lazy(() => import("../modules/FlowChart/FlowChart")),
      },
      {
        path: "/flow_editor",
        component: lazy(() => import("../modules/FlowChart/FlowChartEditor")),
      },
      {
        path: "/gretting",
        component: lazy(() => import("../modules/Greeting/Greeting")),
      },
      {
        path: "/",
        component: lazy(() => import("../modules/Greeting/Greeting")),
      },
    ],
  },
];
