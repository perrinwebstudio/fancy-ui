import { Button, Checkbox, Divider, Popover, Space, Typography } from 'antd';
import Title from 'antd/es/typography/Title';
import React, { useMemo, useState } from 'react';
import { CgChevronDown, CgChevronUp, CgRemove } from 'react-icons/cg';
import StyledFilterDropdown from './StyledFilterDropdown';
import { BACKLINK_OPPORTUNITIES, BACKLINK_OPPORTUNITY_STATUSES } from '@crema/constants';
import { CloseOutlined } from '@ant-design/icons';

const FilterButton = ({ filters, onChangeToggleFilter, onClearAll }) => {
  const [open, setOpen] = useState(false)

  const checkedOp = useMemo(() => {
    return filters?.opportunities || []
  }, [filters])

  const checkedSta = useMemo(() => {
    return filters?.statuses || []
  }, [filters])

  return <Popover
    content={<StyledFilterDropdown direction='vertical'>
      <strong>Filter By Opportunity</strong>
      <Divider />
      {
        BACKLINK_OPPORTUNITIES.map((opportunity) => {
          return <Checkbox onChange={() => {
            onChangeToggleFilter('opportunities', opportunity)
          }} key={opportunity} checked={checkedOp.includes(opportunity)}>{opportunity}</Checkbox>
        })
      }
      <div style={{marginTop: '5px'}}><strong>Filter By Status</strong></div>
      <Divider />
      {
        Object.values(BACKLINK_OPPORTUNITY_STATUSES).map((status) => {
          return <Checkbox onChange={() => {
            onChangeToggleFilter('statuses', status.key)
          }} key={status.key} checked={checkedSta.includes(status.key)}>{status.text}</Checkbox>
        }, [filters])
      }
      <Divider />
      <Button onClick={() => {
        onClearAll()
        setOpen(false)
      }} type="link" icon={<CloseOutlined />} >Clear All</Button>
    </StyledFilterDropdown>}
    trigger='click'
    open={open}
    onOpenChange={(o) => setOpen(o)}
    placement='bottomRight'
  >
    <Button type="link">
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 'bold' }}>
        Filter By
        {!open && <CgChevronUp size={16} />}
        {open && <CgChevronDown size={16} />}
      </div>
    </Button>
  </Popover>
}

export default FilterButton