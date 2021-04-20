import "./Flow.scss";
import React, { useState, useEffect, useCallback } from "react";
import ReactFlow, {
  addEdge,
  Controls,
  removeElements,
} from "react-flow-renderer";
import { Button } from "antd";
import nodeTypes from "./widgets/index";

const strokeWidth = 2;
const initBgColor = "#e6e6e6";
const snapGrid: [number, number] = [10, 10];

const CustomNodeFlow = () => {
  const [elements, setElements] = useState<any[]>([]);
  const [reactflowInstance, setReactflowInstance] = useState<any>(null);

  useEffect(() => {
    setElements([
      {
        id: "1",
        type: "startNode",
        data: { label: "告警" },
        position: { x: 220, y: 0 },
      },
      {
        id: "2",
        type: "squareNode",
        data: { label: "查看GC线程CPU" },
        position: { x: 200, y: 70 },
      },
      {
        id: "3",
        type: "diamondNode",
        data: { label: ">60%" },
        position: { x: 140, y: 140 },
      },
      {
        id: "4",
        type: "diamondNode",
        data: { label: "<=60%" },
        position: { x: 300, y: 140 },
      },
      {
        id: "5",
        type: "endNode",
        data: { label: "未知" },
        position: { x: 120, y: 250 },
      },
      {
        id: "6",
        type: "squareNode",
        data: { label: "查看业务线程CPU" },
        position: { x: 350, y: 250 },
      },
      {
        id: "7",
        type: "endNode",
        data: { label: "END" },
        position: { x: 300, y: 350 },
      },
      { id: "e1", source: "1", target: "2", style: { strokeWidth } },
      { id: "e2", source: "2", target: "3", style: { strokeWidth } },
      { id: "e3", source: "2", target: "4", style: { strokeWidth } },
      { id: "e4", source: "3", target: "5", style: { strokeWidth } },
      {
        id: "e5",
        source: "4",
        target: "6",
        type: "smoothstep",
        arrowHeadType: "arrowclosed",
        style: { strokeWidth },
      },
      {
        id: "e6",
        source: "6",
        target: "7",
        type: "step",
        arrowHeadType: "arrow",
        style: { strokeWidth },
      },
    ]);
  }, []);

  useEffect(() => {
    if (reactflowInstance && elements.length > 0) {
      reactflowInstance.fitView();
    }
  }, [reactflowInstance, elements.length]);

  const onNodeDragStop = (event: any, node: any) =>
    setElements((els) =>
      els.map((item) => {
        if (item.id === node.id) {
          return node;
        } else {
          return item;
        }
      })
    );

  const onElementClick = (event: any, element: any) =>
    console.log("click", element);

  const onElementsRemove = useCallback(
    (elementsToRemove) =>
      setElements((els) => removeElements(elementsToRemove, els)),
    []
  );

  const onConnect = useCallback(
    (params) =>
      setElements((els) => addEdge({ ...params, style: { strokeWidth } }, els)),
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
    <>
      <ReactFlow
        elements={elements}
        onConnect={onConnect}
        onNodeDragStop={onNodeDragStop}
        onElementsRemove={onElementsRemove}
        onElementClick={onElementClick}
        style={{ background: initBgColor }}
        onLoad={onLoad}
        nodeTypes={nodeTypes}
        snapToGrid={true}
        snapGrid={snapGrid}
      >
        <Button
          type="primary"
          style={{ zIndex: 100, left: 10, top: 10 }}
          onClick={() => {
            console.log(elements);
            console.log(JSON.stringify(elements));
          }}
        >
          保 存
        </Button>
        <Controls />
      </ReactFlow>
    </>
  );
};

export default CustomNodeFlow;
