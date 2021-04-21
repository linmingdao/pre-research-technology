import React, { memo } from "react";
import { Handle, Position } from "react-flow-renderer";

const Judgment: React.FC<{ data: any }> = ({ data }) => {
  return (
    <>
      <Handle
        type="target"
        style={{ backgroundColor: "blue" }}
        position={Position.Top}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
      <Handle
        type="source"
        style={{ backgroundColor: "red" }}
        position={Position.Bottom}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
      <div className="node judgment">
        <div className="label">{data.label}</div>
      </div>
    </>
  );
};

export default memo(Judgment);
