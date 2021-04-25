import React from "react";

const Sidebar: React.FC = () => {
  const onDragStart = (event: any, nodeType: string) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside className="sidebar">
      <div
        className="dnd-node-wrapper"
        onDragStart={(event) => onDragStart(event, "Start")}
        draggable
      >
        <div className="node start">开始节点</div>
      </div>
      <div
        className="dnd-node-wrapper"
        onDragStart={(event) => onDragStart(event, "Process")}
        draggable
      >
        <div className="node process">流程节点</div>
      </div>
      <div
        className="dnd-node-wrapper"
        onDragStart={(event) => onDragStart(event, "Judgment")}
        draggable
      >
        <div className="node judgment">
          <div className="label">条件节点</div>
        </div>
      </div>
      <div
        className="dnd-node-wrapper"
        onDragStart={(event) => onDragStart(event, "End")}
        draggable
      >
        <div className="node end">结束节点</div>
      </div>
    </aside>
  );
};

export default Sidebar;
