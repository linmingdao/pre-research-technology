import React from "react";

const Sidebar: React.FC = () => {
  const onDragStart = (event: any, nodeType: string) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside>
      <div className="description">
        You can drag these nodes to the pane on the right.
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "startNode")}
        draggable
      >
        开 始
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "squareNode")}
        draggable
      >
        流 程
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "diamondNode")}
        draggable
      >
        条 件
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "endNode")}
        draggable
      >
        结 束
      </div>
    </aside>
  );
};

export default Sidebar;
