import React, { memo } from "react";
import { Handle, Position } from "react-flow-renderer";
import { DataType } from "../types";
import NodeLabel from "../NodeLabel/NodeLabel";

const Start: React.FC<{ data: DataType }> = ({ data }) => {
  return (
    <>
      <Handle
        type="source"
        style={{ backgroundColor: "#f29191" }}
        position={Position.Bottom}
      />
      <div className="node start">
        <NodeLabel label={data.label} />
      </div>
    </>
  );
};

export default memo(Start);
