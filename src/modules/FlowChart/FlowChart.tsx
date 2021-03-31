import React, { useState, useEffect, useCallback } from "react";
import ReactFlow, {
  isEdge,
  removeElements,
  addEdge,
  MiniMap,
  Controls,
  Node,
} from "react-flow-renderer";
import StartNode from "./widgets/StartNode";
import EndNode from "./widgets/EndNode";
import SquareNode from "./widgets/SquareNode";
import DiamondNode from "./widgets/DiamondNode";
import ColorSelectorNode from "./widgets/ColorSelectorNode";

const onNodeDragStop = (event: any, node: any) =>
  console.log("drag stop", node);
const onElementClick = (event: any, element: any) =>
  console.log("click", element);

const initBgColor = "#c3c3c3";
const connectionLineStyle = { strokeWidth: "1px", stroke: "#fff" };
const snapGrid: [number, number] = [10, 10];
const nodeTypes = {
  startNode: StartNode,
  endNode: EndNode,
  squareNode: SquareNode,
  diamondNode: DiamondNode,
  selectorNode: ColorSelectorNode,
};

const CustomNodeFlow = () => {
  const [reactflowInstance, setReactflowInstance] = useState<any>(null);
  const [elements, setElements] = useState<any[]>([]);
  const [bgColor, setBgColor] = useState(initBgColor);

  useEffect(() => {
    const onChange = (event: { target: { value: any } }) => {
      setElements((els: any) =>
        els.map((e: any) => {
          if (isEdge(e) || e.id !== "2") {
            return e;
          }

          const color = event.target.value;

          setBgColor(color);

          return {
            ...e,
            data: {
              ...e.data,
              color,
            },
          };
        })
      );
    };

    setElements([
      {
        id: "0",
        type: "selectorNode",
        data: { onChange: onChange, color: initBgColor },
        style: { border: "1px solid #777", padding: 10 },
        position: { x: 500, y: 0 },
      },
      {
        id: "1",
        type: "startNode",
        data: { onChange: onChange, color: "red", label: "告警" },
        style: { border: "1px solid #777", padding: 10 },
        position: { x: 200, y: 0 },
      },
      {
        id: "2",
        type: "squareNode",
        data: {
          onChange: onChange,
          color: "green",
          label: "查看GC线程CPU",
        },
        style: { border: "1px solid #777", padding: 10 },
        position: { x: 200, y: 70 },
      },
      {
        id: "3",
        type: "diamondNode",
        data: { onChange: onChange, color: "blue", label: ">60%" },
        style: { border: "1px solid #777", padding: 10 },
        position: { x: 200, y: 140 },
      },
      {
        id: "4",
        type: "diamondNode",
        data: { onChange: onChange, color: "blue", label: "<=60%" },
        style: { border: "1px solid #777", padding: 10 },
        position: { x: 300, y: 140 },
      },
      {
        id: "5",
        type: "endNode",
        data: { onChange: onChange, color: "red", label: "未知" },
        style: { border: "1px solid #777", padding: 10 },
        position: { x: 200, y: 210 },
      },
      {
        id: "6",
        type: "squareNode",
        data: {
          onChange: onChange,
          color: "green",
          label: "查看业务线程CPU",
        },
        style: { border: "1px solid #777", padding: 10 },
        position: { x: 300, y: 210 },
      },
      {
        id: "7",
        type: "endNode",
        data: { onChange: onChange, color: "red", label: "END" },
        style: { border: "1px solid #777", padding: 10 },
        position: { x: 300, y: 280 },
      },
      {
        id: "e1",
        source: "1",
        target: "2",
        animated: true,
        style: { stroke: "#fff" },
      },
      {
        id: "e2",
        source: "2",
        target: "3",
        animated: true,
        style: { stroke: "#fff" },
      },
      {
        id: "e3",
        source: "2",
        target: "4",
        animated: true,
        style: { stroke: "#fff" },
      },
      {
        id: "e4",
        source: "3",
        target: "5",
        animated: false,
        style: { stroke: "#555", strokeWidth: "5px" },
      },
      {
        id: "e5",
        source: "4",
        target: "6",
        animated: true,
        style: { stroke: "#fff" },
      },
      {
        id: "e6",
        source: "6",
        target: "7",
        animated: false,
        style: { stroke: "#000", strokeWidth: "5px" },
      },
    ]);
  }, []);

  useEffect(() => {
    if (reactflowInstance && elements.length > 0) {
      reactflowInstance.fitView();
    }
  }, [reactflowInstance, elements.length]);

  const onElementsRemove = useCallback(
    (elementsToRemove) =>
      setElements((els) => removeElements(elementsToRemove, els)),
    []
  );

  const onConnect = useCallback(
    (params) =>
      setElements((els) =>
        addEdge({ ...params, animated: true, style: { stroke: "#fff" } }, els)
      ),
    []
  );

  const onLoad = useCallback(
    (rfi) => {
      if (!reactflowInstance) {
        setReactflowInstance(rfi);
        console.log("flow loaded:", rfi);
      }
    },
    [reactflowInstance]
  );

  return (
    <ReactFlow
      elements={elements}
      onElementClick={onElementClick}
      onElementsRemove={onElementsRemove}
      onConnect={onConnect}
      onNodeDragStop={onNodeDragStop}
      style={{ background: bgColor }}
      onLoad={onLoad}
      nodeTypes={nodeTypes}
      connectionLineStyle={connectionLineStyle}
      snapToGrid={true}
      snapGrid={snapGrid}
      defaultZoom={1.5}
    >
      <MiniMap
        nodeStrokeColor={(n: Node) => {
          switch (n.type) {
            case "input":
              return "#0041d0";
            case "selectorNode":
              return bgColor;
            case "output":
              return "#ff0072";
            default:
              return "#0041d0";
          }
        }}
        nodeColor={(n) => {
          if (n.type === "selectorNode") return bgColor;
          return "#fff";
        }}
      />
      <Controls />
    </ReactFlow>
  );
};

export default CustomNodeFlow;
