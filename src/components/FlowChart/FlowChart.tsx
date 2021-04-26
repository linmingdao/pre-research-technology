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
import { Button, Popconfirm } from "antd";
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
  editable?: boolean;
  dataSource?: any[];
  onSave?: (data: any[]) => void;
  onElementClick?: (event: any, element: any) => void;
  onElementDrop?: (node: NodeType) => NodeType | false;
}

const FlowChart: React.FC<FlowChartProps> = ({
  editable = false,
  dataSource = [],
  onSave,
  onElementClick,
  onElementDrop = (node: NodeType) => node,
}) => {
  const reactFlowWrapper = useRef<any>(null);
  const [elements, setElements] = useState<any[]>(dataSource);
  const [reactflowInstance, setReactflowInstance] = useState<any>(null);
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
      const type = event.dataTransfer.getData("application/reactflow");
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
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
      newNode && setElements((es) => es.concat(newNode));
    }
  };

  useEffect(() => {
    const fitView = () => reactflowInstance && reactflowInstance.fitView();
    fitView();
    window.addEventListener("resize", fitView);
    return () => {
      window.removeEventListener("resize", fitView);
    };
  }, [reactflowInstance]);

  return (
    <div className="flow-editor-dnd">
      {editable ? <Sidebar /> : <></>}
      <div className="flow-wrapper" ref={reactFlowWrapper}>
        <ReactFlowProvider>
          <ReactFlow
            elements={elements}
            nodeTypes={nodeTypes}
            zoomOnPinch={false}
            zoomOnScroll={false}
            nodesDraggable={editable}
            elementsSelectable={editable}
            onLoad={onLoad}
            onDrop={onDrop}
            onConnect={onConnect}
            onDragOver={onDragOver}
            onElementClick={onElementClick}
            onNodeDragStop={onNodeDragStop}
            onElementsRemove={onElementsRemove}
          >
            <Background variant={BackgroundVariant.Lines} />
            {editable ? (
              <>
                <Button
                  type="primary"
                  shape="round"
                  icon={<SaveOutlined />}
                  style={{ zIndex: 100, left: 10, top: 10 }}
                  onClick={() => onSave && onSave(elements)}
                >
                  保 存
                </Button>
                <Popconfirm
                  okText="确定"
                  cancelText="取消"
                  title="确认清空面板内容么?"
                  onConfirm={() => setElements([])}
                >
                  <Button
                    danger
                    shape="round"
                    icon={<DeleteOutlined />}
                    style={{ zIndex: 100, left: 20, top: 10 }}
                  >
                    清 空
                  </Button>
                </Popconfirm>
              </>
            ) : (
              <></>
            )}
            <Controls showInteractive={editable} />
          </ReactFlow>
        </ReactFlowProvider>
      </div>
    </div>
  );
};

FlowChart.displayName = "FlowChart";

export default FlowChart;
