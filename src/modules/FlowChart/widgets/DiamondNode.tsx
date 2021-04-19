import React, { memo } from "react";
import { Handle, Position } from "react-flow-renderer";

const DiamondNode: React.FC<{ data: any }> = ({ data }) => {
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
      <span className="flow-diagram-node diamond">
        <div className="label">{data.label}</div>
        <div className="bg"></div>
      </span>
    </>
  );
};

export default memo(DiamondNode);
