import React, { memo } from "react";
import { Handle, Position } from "react-flow-renderer";

const EndNode: React.FC<{ data: any }> = ({ data }) => {
  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
      <span style={{ backgroundColor: data.color, color: "#fff" }}>
        <strong>{data.label}</strong>
      </span>
    </>
  );
};

export default memo(EndNode);
