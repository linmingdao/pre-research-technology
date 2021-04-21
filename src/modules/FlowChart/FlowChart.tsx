import "./Flow.scss";
import React, { useRef, useState, useEffect, useCallback } from "react";
import ReactFlow, {
  addEdge,
  Controls,
  Background,
  BackgroundVariant,
  removeElements,
  ReactFlowProvider,
} from "react-flow-renderer";
import { DeleteOutlined, SaveOutlined } from "@ant-design/icons";

import { Button } from "antd";
import Sidebar from "./Sidebar";
import "./dnd.scss";
import nodeTypes from "./widgets/index";
import data from "./data";

const strokeWidth = 2;

let id = 0;

const getId = () => `dndnode_${id++}`;

const CustomNodeFlow = () => {
  const reactFlowWrapper = useRef<any>(null);
  const [elements, setElements] = useState<any[]>([]);
  const [reactflowInstance, setReactflowInstance] = useState<any>(null);

  useEffect(() => {
    setElements(data);
  }, []);

  useEffect(() => {
    reactflowInstance && reactflowInstance.fitView();
  }, [reactflowInstance]);

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

  const onDragOver = (event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const onDrop = (event: any) => {
    event.preventDefault();

    if (reactFlowWrapper && reactFlowWrapper.current) {
      const reactFlowBounds = reactFlowWrapper?.current?.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");
      console.log(type);
      const position = reactflowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: "New" },
      };

      setElements((es) => es.concat(newNode));
    }
  };

  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <Sidebar />
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            elements={elements}
            nodeTypes={nodeTypes}
            zoomOnPinch={false}
            zoomOnScroll={false}
            onLoad={onLoad}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onConnect={onConnect}
            onElementClick={onElementClick}
            onNodeDragStop={onNodeDragStop}
            onElementsRemove={onElementsRemove}
          >
            <Background variant={BackgroundVariant.Lines} />
            <Button
              type="primary"
              shape="round"
              icon={<SaveOutlined />}
              style={{ zIndex: 100, left: 10, top: 10 }}
              onClick={() => {
                console.log(elements);
                console.log(JSON.stringify(elements));
              }}
            >
              保 存
            </Button>
            <Button
              danger
              shape="round"
              icon={<DeleteOutlined />}
              style={{ zIndex: 100, left: 20, top: 10 }}
              onClick={() => {
                setElements([]);
              }}
            >
              清 空
            </Button>
            <Controls />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default CustomNodeFlow;
