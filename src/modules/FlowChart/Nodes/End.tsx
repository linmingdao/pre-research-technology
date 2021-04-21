import React, { memo } from "react";
import { Handle, Position } from "react-flow-renderer";

const End: React.FC<{ data: any }> = ({ data }) => {
  return (
    <>
      <Handle
        type="target"
        style={{ backgroundColor: "blue" }}
        position={Position.Top}
        onConnect={(params) => console.log("handle end node onConnect", params)}
      />
      <div className="node end">{data.label}</div>
    </>
  );
};

export default memo(End);
