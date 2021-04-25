import React, { memo } from "react";
import { Handle, Position } from "react-flow-renderer";
import NodeLabel from "../NodeLabel/NodeLabel";

const End: React.FC<{ data: any }> = ({ data }) => {
  return (
    <>
      <Handle
        type="target"
        style={{ backgroundColor: "#46d8aa" }}
        position={Position.Top}
        onConnect={(params) => console.log("handle end node onConnect", params)}
      />
      <div className="node end">
        <NodeLabel label={data.label} />
      </div>
    </>
  );
};

export default memo(End);
