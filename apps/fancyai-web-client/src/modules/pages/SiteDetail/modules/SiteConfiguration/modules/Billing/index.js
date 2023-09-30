import React from 'react';
import { SEOPlanPicker } from '@crema/modules/siteSetup';
import { Button, Card, Divider, Space } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

const SiteBilling = () => {
  const [edit, setEdit] = React.useState(false)

  return <>
    <Card>
      <SEOPlanPicker />

      <Divider />

      <div style={{width: '100%', display: 'flex', justifyContent: 'center', gap: '10px'}} >
        {!edit && <Button onClick={() => setEdit(true)} type='primary' style={{minWidth: '200px'}} primary>
          Edit
        </Button>}
        {edit && <Button onClick={() => setEdit(false)} icon={<ArrowLeftOutlined />} style={{minWidth: '200px'}} ghost type="primary">
          Cancel
        </Button>}
        {edit && <Button type='primary' style={{minWidth: '200px'}} primary>
          Confirm Changes
        </Button>}
      </div>
    </Card>
  </>
}

export default SiteBilling