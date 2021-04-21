import "./Flow.scss";
import React, { useState, useEffect, useCallback } from "react";
import ReactFlow, {
  addEdge,
  Controls,
  Background,
  BackgroundVariant,
  removeElements,
  ReactFlowProvider,
} from "react-flow-renderer";
import { Button } from "antd";
import nodeTypes from "./widgets/index";
import data from "./data";

const strokeWidth = 2;

const CustomNodeFlow = () => {
  const [elements, setElements] = useState<any[]>([]);
  const [reactflowInstance, setReactflowInstance] = useState<any>(null);

  useEffect(() => {
    setElements(data);
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
      setElements((els) =>
        addEdge(
          {
            ...params,
            type: "smoothstep",
            arrowHeadType: "arrowclosed",
            style: { strokeWidth },
          },
          els
        )
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
    <ReactFlowProvider>
      <ReactFlow
        elements={elements}
        nodeTypes={nodeTypes}
        zoomOnPinch={false}
        zoomOnScroll={false}
        onLoad={onLoad}
        onConnect={onConnect}
        onElementClick={onElementClick}
        onNodeDragStop={onNodeDragStop}
        onElementsRemove={onElementsRemove}
      >
        <Background variant={BackgroundVariant.Lines} />
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
    </ReactFlowProvider>
  );
};

export default CustomNodeFlow;
