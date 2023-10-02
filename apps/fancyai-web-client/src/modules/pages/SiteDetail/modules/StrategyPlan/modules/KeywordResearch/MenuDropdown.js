import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Popover, Space, Switch } from 'antd';
import { CircleMenuButton } from '../shared.styled';
import { MdMoreVert } from 'react-icons/md';
import { DeleteOutlined } from '@ant-design/icons';

const MenuDropdown = ({ prop1 }) => {
  const [open, setOpen] = useState(false);

  return <Popover
    content={<Space direction='vertical'>
      <Space>
        <Switch size='small' />
        <span>Short-Term Priority</span>
      </Space>
      <Space>
        <Switch size='small' />
        <span>Long-Term Priority</span>
      </Space>
      <Button block style={{
        padding: '0 5px',
        textAlign: 'left',
      }} danger type="text" icon={<DeleteOutlined />}>Remove</Button>
    </Space>}
    trigger='click'
    open={open}
    onOpenChange={(o) => setOpen(o)}
    placement='bottomRight'
  >
    <CircleMenuButton size='large' ghost type="primary" icon={<MdMoreVert />} />
  </Popover>
}

export default MenuDropdown