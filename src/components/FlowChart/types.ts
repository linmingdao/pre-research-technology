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

export interface FlowChartProps {
  ref?: any;
  editable?: boolean;
  dataSource?: any[];
  strokeWidth?: number;
  customNodes?: NodeDescription[];
  defaultNodes?: AvailableBuiltInType[];
  onSave?: (data: any[]) => void;
  onElementClick?: (event: any, element: any) => void;
  onNodeDoubleClick?: (event: any, element: any) => void;
  onElementDrop?: (element: ElementType) => ElementType | false;
}
