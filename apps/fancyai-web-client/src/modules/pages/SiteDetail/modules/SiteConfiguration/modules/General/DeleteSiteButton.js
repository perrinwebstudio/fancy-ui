import { DeleteOutlined } from '@ant-design/icons';
import { Button, Popover } from 'antd';
import React from 'react';
import { MdMoreVert } from 'react-icons/md';

const DeleteSiteButton = ({ onClickDelete }) => {
  const [open, setOpen] = React.useState(false)

  return <Popover
    open={open}
    onOpenChange={(v) => {
      setOpen(v)
    }}
    className="texttt"
    showArrow={false}
    placement="bottomRight"
    style={{
      padding: '0px'
    }}
    content={
      <div style={{ minWidth: '120px' }}>
        <Button
          onClick={() => {
            onClickDelete()
            setOpen(false)
          }}
          block
          style={{
            padding: '0 5px',
            textAlign: 'left',
          }}
          danger type="text" icon={<DeleteOutlined />}>Remove</Button>
      </div>
    }
    trigger={['click']}
  >
    <Button className='btn-more' type="link" >
      <MdMoreVert size={20} />
    </Button>
  </Popover>
}


export default DeleteSiteButton