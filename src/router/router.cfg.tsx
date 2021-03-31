import loadable from "@loadable/component";

export const routes = [
  {
    path: "/error",
    component: loadable(() => import("../pages/Error/Error")),
  },
  {
    path: "/404",
    component: loadable(() => import("../pages/NotFound/NotFound")),
  },
  {
    path: "/",
    component: loadable(() => import("../pages/Home/Home")),
    routes: [
      {
        path: "/flow",
        component: loadable(() => import("../modules/FlowChart/FlowChart")),
      },
      {
        path: "/gretting",
        component: loadable(() => import("../modules/Greeting/Greeting")),
      },
      {
        path: "/",
        component: loadable(() => import("../modules/Greeting/Greeting")),
      },
    ],
  },
];
