import React from 'react';

const Error: React.FC<{ message?: string }> = ({ message = '未知的错误信息' }) => {
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
      <span style={{ color: 'red' }}>出错啦！，错误消息：{message}</span>
    </div>
  );
};

Error.displayName = 'Error';

export default Error;
