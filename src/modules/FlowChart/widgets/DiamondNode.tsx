import React, { memo } from "react";
import { Handle, Position } from "react-flow-renderer";

const DiamondNode: React.FC<{ data: any }> = ({ data }) => {
  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
      <span style={{ backgroundColor: data.color, color: "#fff" }}>
        <strong>{data.label}</strong>
      </span>
    </>
  );
};

export default memo(DiamondNode);
