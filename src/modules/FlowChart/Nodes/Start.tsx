import React, { memo } from "react";
import { Handle, Position } from "react-flow-renderer";

const Start: React.FC<{ data: any }> = ({ data }) => {
  return (
    <>
      <Handle
        type="source"
        style={{ backgroundColor: "red" }}
        position={Position.Bottom}
        onConnect={(params) =>
          console.log("handle start node onConnect", params)
        }
      />
      <div className="node start">{data.label}</div>
    </>
  );
};

export default memo(Start);
