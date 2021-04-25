import React, { memo } from "react";
import { Handle, Position } from "react-flow-renderer";
import NodeLabel from "../NodeLabel/NodeLabel";

const Start: React.FC<{ data: any }> = ({ data }) => {
  return (
    <>
      <Handle
        type="source"
        style={{ backgroundColor: "#f29191" }}
        position={Position.Bottom}
        onConnect={(params) =>
          console.log("handle start node onConnect", params)
        }
      />
      <div className="node start">
        <NodeLabel label={data.label} />
      </div>
    </>
  );
};

export default memo(Start);
