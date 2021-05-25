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
        path: "/nestform",
        component: lazy(() => import("../modules/NestForm/NestForm")),
      },
      {
        path: "/braft",
        component: lazy(() => import("../modules/BraftEditor/BraftEditor")),
      },
      {
        path: "/quill",
        component: lazy(() => import("../modules/ReactQuill/ReactQuill")),
      },
      {
        path: "/draft",
        component: lazy(() => import("../modules/DraftJs/DraftJs")),
      },
      {
        path: "/flow",
        component: lazy(() => import("../modules/FlowChart/FlowChart")),
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
