import React, { memo } from "react";
import { Handle, Position } from "react-flow-renderer";
import NodeLabel from "../NodeLabel/NodeLabel";

const Judgment: React.FC<{ data: any }> = ({ data }) => {
  return (
    <>
      <Handle
        type="target"
        style={{ backgroundColor: "#46d8aa" }}
        position={Position.Top}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
      <Handle
        type="source"
        style={{ backgroundColor: "#f29191" }}
        position={Position.Bottom}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
      <div className="node judgment">
        <NodeLabel
          label={data.label}
          style={{ width: "50px", maxHeight: "50px" }}
        />
      </div>
    </>
  );
};

export default memo(Judgment);
