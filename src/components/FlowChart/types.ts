export enum AvailableBuiltInType {
  END = "end",
  START = "start",
  PROCESS = "process",
  JUDGMENT = "judgment",
}

export interface NodeDescription {
  type: string;
  label: string;
  component: React.JSXElementConstructor<never>;
}

export interface NodeTypes {
  [nodeType: string]: React.JSXElementConstructor<never>;
}

export interface PositionType {
  x: number;
  y: number;
}

export interface DataType {
  label: string;
  [key: string]: any;
}

export interface ElementType {
  id: string;
  type: string;
  data: DataType;
  position: PositionType;
}
