import React, { memo } from "react";
import { Handle, Position } from "react-flow-renderer";

const StartNode: React.FC<{ data: any }> = ({ data }) => {
  return (
    <>
      <Handle
        type="source"
        position={Position.Bottom}
        onConnect={(params) =>
          console.log("handle start node onConnect", params)
        }
      />
      <span className="flow-diagram-node start">{data.label}</span>
    </>
  );
};

export default memo(StartNode);
