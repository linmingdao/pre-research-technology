import "./FlowChart.scss";
import shortid from "shortid";
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
import Sidebar from "./Sidebar/Sidebar";
import nodeTypes from "./Nodes/index";

const strokeWidth = 2;

export interface PositionType {
  x: number;
  y: number;
}

export interface DataType {
  label: string;
  [key: string]: any;
}

export interface NodeType {
  id: string;
  type: string;
  data: DataType;
  position: PositionType;
}

export interface FlowChartProps {
  dataSource?: any[];
  onElementClick?: (event: any, element: any) => void;
  onElementDrop?: (node: NodeType) => NodeType | false;
}

const FlowChart: React.FC<FlowChartProps> = ({
  dataSource = [],
  onElementClick,
  onElementDrop = (node: NodeType) => node,
}) => {
  const reactFlowWrapper = useRef<any>(null);
  const [elements, setElements] = useState<any[]>(dataSource);
  const [reactflowInstance, setReactflowInstance] = useState<any>(null);

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
      !reactflowInstance && setReactflowInstance(rfi);
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
      const position = reactflowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const newNode = onElementDrop({
        type,
        position,
        data: { label: type },
        id: shortid.generate(),
      });

      if (newNode) {
        setElements((es) => es.concat(newNode));
      }
    }
  };

  return (
    <div className="flow-editor-dnd">
      <Sidebar />
      <div className="flow-wrapper" ref={reactFlowWrapper}>
        <ReactFlowProvider>
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
        </ReactFlowProvider>
      </div>
    </div>
  );
};

FlowChart.displayName = "FlowChart";

export default FlowChart;
