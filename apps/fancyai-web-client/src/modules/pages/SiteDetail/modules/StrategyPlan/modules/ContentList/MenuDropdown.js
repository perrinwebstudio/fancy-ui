import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Popover, Space, Switch } from 'antd';
import { CircleMenuButton } from '../../shared.styled';
import { MdMoreVert } from 'react-icons/md';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const MenuDropdown = ({ onEdit, onRemove, type }) => {
  const [open, setOpen] = useState(false);

  return <Popover
    content={<Space direction='vertical'>
      <Button
        onClick={() => {
          onEdit?.()
          setOpen(false)
        }}
        block style={{
        padding: '0 5px',
        textAlign: 'left',
      }} primary type="link" icon={<EditOutlined />}>{type === 'new' ? 'Edit' : 'Edit Scheduled Date'}</Button>
      <Button
        onClick={() => {
          onRemove?.()
          setOpen(false)
        }}
        block style={{
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