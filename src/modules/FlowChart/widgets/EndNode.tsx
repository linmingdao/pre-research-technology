import React, { memo } from "react";
import { Handle, Position } from "react-flow-renderer";

const EndNode: React.FC<{ data: any }> = ({ data }) => {
  return (
    <>
      <Handle
        type="target"
        style={{ backgroundColor: "blue" }}
        position={Position.Top}
        onConnect={(params) => console.log("handle end node onConnect", params)}
      />
      <span className="flow-diagram-node end">{data.label}</span>
    </>
  );
};

export default memo(EndNode);
