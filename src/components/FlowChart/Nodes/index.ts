import React from "react";
import end from "./End";
import start from "./Start";
import process from "./Process";
import judgment from "./Judgment";

export type BuiltInAvailableType = "end" | "start" | "process" | "judgment";

export interface NodeDescription {
  type: string;
  label: string;
  component: React.JSXElementConstructor<any>;
}

export interface NodeTypes {
  [nodeType: string]: React.JSXElementConstructor<any>;
}

export const builtInNodes: NodeDescription[] = [
  { label: "开始", type: "start", component: start },
  { label: "流程", type: "process", component: process },
  { label: "判断", type: "judgment", component: judgment },
  { label: "结束", type: "end", component: end },
];
