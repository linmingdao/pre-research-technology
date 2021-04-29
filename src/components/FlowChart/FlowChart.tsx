import shortid from "shortid";
import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useImperativeHandle,
} from "react";
import ReactFlow, {
  addEdge,
  Controls,
  Background,
  BackgroundVariant,
  removeElements,
  ReactFlowProvider,
} from "react-flow-renderer";
import Toolbar from "./Toolbar/Toolbar";
import Sidebar from "./Sidebar/Sidebar";
import { builtInNodes } from "./Nodes/index";
import { getNodeTypesAndMapFromConfig, mergeCustomNodes } from "./utils";
import { AvailableBuiltInType, FlowChartProps, ElementType } from "./types";

const FlowChart: React.FC<FlowChartProps> = React.forwardRef(
  (
    {
      editable = false,
      dataSource = [],
      strokeWidth = 2,
      customNodes = [],
      defaultNodes,
      onSave,
      onElementClick,
      onNodeDoubleClick,
      onElementDrop = (element: ElementType) => element,
    },
    ref
  ) => {
    const reactFlowWrapper = useRef<any>(null);
    const [elements, setElements] = useState<any[]>([]);
    const [reactflowInstance, setReactflowInstance] = useState<any>(null);
    const { nodes, nodeTypes, nodesMap } = getNodeTypesAndMapFromConfig(
      mergeCustomNodes(
        customNodes,
        builtInNodes,
        defaultNodes || [
          AvailableBuiltInType.END,
          AvailableBuiltInType.JUDGMENT,
          AvailableBuiltInType.PROCESS,
          AvailableBuiltInType.START,
        ]
      )
    );
    const onNodeDragStop = (event: any, node: any) =>
      setElements((els) =>
        els.map((item) => (item.id === node.id ? node : item))
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
      [strokeWidth]
    );
    const onLoad = useCallback(
      (rfi) => !reactflowInstance && setReactflowInstance(rfi),
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
          data: { label: nodesMap[type].label },
          id: shortid.generate(),
        });
        newNode && setElements((es) => es.concat(newNode));
      }
    };

    useImperativeHandle(ref, () => ({
      reactflowInstance,
      setElements: function (elements: any[]) {
        setElements(elements);
      },
    }));

    useEffect(() => {
      const fitView = () => reactflowInstance && reactflowInstance.fitView();
      fitView();
      window.addEventListener("resize", fitView);
      return () => {
        window.removeEventListener("resize", fitView);
      };
    }, [reactflowInstance]);

    useEffect(() => {
      setElements(dataSource);
    }, [dataSource]);

    return (
      <div className="flow-editor-dnd">
        <Sidebar nodes={nodes} editable={editable} />
        <div className="flow-wrapper" ref={reactFlowWrapper}>
          <ReactFlowProvider>
            <ReactFlow
              elements={elements}
              zoomOnPinch={false}
              zoomOnScroll={false}
              zoomOnDoubleClick={false}
              nodeTypes={nodeTypes}
              nodesDraggable={editable}
              nodesConnectable={editable}
              elementsSelectable={editable}
              onLoad={onLoad}
              onDrop={onDrop}
              onConnect={onConnect}
              onDragOver={onDragOver}
              onElementClick={onElementClick}
              onNodeDragStop={onNodeDragStop}
              onElementsRemove={onElementsRemove}
              onNodeDoubleClick={onNodeDoubleClick}
            >
              <Controls showInteractive={editable} />
              <Background variant={BackgroundVariant.Lines} />
              <Toolbar
                editable={editable}
                onEmpty={() => setElements([])}
                onSave={() => onSave && onSave(elements)}
              />
            </ReactFlow>
          </ReactFlowProvider>
        </div>
      </div>
    );
  }
);

FlowChart.displayName = "FlowChart";

export default FlowChart;
