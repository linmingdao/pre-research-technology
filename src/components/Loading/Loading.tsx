import React from 'react';
import { Spin } from 'antd';

const Loading: React.FC<{ tip?: string }> = ({ tip = '数据玩命加载中...' }) => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Spin tip={tip} />
    </div>
  );
};

Loading.displayName = 'Loading';

export default Loading;
