import React, { memo } from "react";
import { Handle, Position } from "react-flow-renderer";

const SquareNode: React.FC<{ data: any }> = ({ data }) => {
  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
      <span className="flow-diagram-node flow-diagram-node_square">
        {data.label}
      </span>
    </>
  );
};

export default memo(SquareNode);
