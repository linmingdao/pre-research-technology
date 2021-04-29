import React, { memo } from 'react';
import { Handle, Position } from 'react-flow-renderer';
import { DataType } from '../types';
import NodeLabel from '../NodeLabel/NodeLabel';

const Process: React.FC<{ data: DataType }> = ({ data }) => {
  return (
    <>
      <Handle type="target" style={{ backgroundColor: '#46d8aa' }} position={Position.Top} />
      <Handle type="source" style={{ backgroundColor: '#f29191' }} position={Position.Bottom} />
      <div className="node process">
        <NodeLabel label={data.label} style={{ maxWidth: '100px', maxHeight: '50px' }} />
      </div>
    </>
  );
};

export default memo(Process);
