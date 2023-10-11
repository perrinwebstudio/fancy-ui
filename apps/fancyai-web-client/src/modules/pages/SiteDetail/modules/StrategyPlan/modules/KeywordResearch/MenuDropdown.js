import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Popover, Space, Switch } from 'antd';
import { CircleMenuButton } from '../../shared.styled';
import { MdMoreVert } from 'react-icons/md';
import { DeleteOutlined } from '@ant-design/icons';
import { KEYWORD_TYPE_LONG_TERM, KEYWORD_TYPE_NONE, KEYWORD_TYPE_SHORT_TERM } from '@crema/constants';
import { useSetKeywordTypeMutation } from 'apps/fancyai-web-client/src/core/api/apiKeyword';

const MenuDropdown = ({ keyword, onRemove }) => {
  const [open, setOpen] = useState(false);
  const [ setType, { isLoading } ] = useSetKeywordTypeMutation()

  const onChange = useCallback((type, checked) => {
    if (checked) {
      setType({
        siteId: keyword.site,
        keywordId: keyword._id,
        keywordType: type,
        showNotification: true
      })
    } else {
      setType({
        siteId: keyword.site,
        keywordId: keyword._id,
        keywordType: KEYWORD_TYPE_NONE,
        showNotification: true
      })
    }
  }, [keyword])

  return <Popover
    content={<Space direction='vertical'>
      <Space>
        <Switch
          disabled={isLoading}
          checked={keyword.type === KEYWORD_TYPE_SHORT_TERM}
          size='small'
          onChange={(e) => {
            onChange(KEYWORD_TYPE_SHORT_TERM, e)
          }}
        />
        <span>Short-Term Priority</span>
      </Space>
      <Space>
        <Switch
          disabled={isLoading}
          checked={keyword.type === KEYWORD_TYPE_LONG_TERM}
          size='small'
          onChange={(e) => {
            onChange(KEYWORD_TYPE_LONG_TERM, e)
          }}
        />
        <span>Long-Term Priority</span>
      </Space>
      <Button
        onClick={() => {
          setOpen(false)
          onRemove()
        }}
        block
        style={{
          padding: '0 5px',
          textAlign: 'left',
        }}
        danger type="text" icon={<DeleteOutlined />}>Remove</Button>
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