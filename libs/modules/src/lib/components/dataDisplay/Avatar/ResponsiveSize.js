import { Avatar } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import React from 'react';

const ResponsiveSize = () => {
  return (
    <Avatar
      size={{
        xs: 24,
        sm: 32,
        md: 40,
        lg: 64,
        xl: 80,
        xxl: 100,
      }}
      icon={<AntDesignOutlined />}
    />
  );
};

export default ResponsiveSize;
