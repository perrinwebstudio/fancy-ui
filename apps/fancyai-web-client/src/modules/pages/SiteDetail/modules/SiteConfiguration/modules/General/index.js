import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Divider, Form } from 'antd';
import { Step1, Step2, Step4 } from '@crema/modules/siteSetup';
import { useGetSiteQuery } from 'apps/fancyai-web-client/src/core/api/apiSite';
import { useSiteDetail } from '@crema/modules/siteDetail';
import AppLoader from '@crema/components/AppLoader';
import { ArrowLeftOutlined } from '@ant-design/icons';

const SiteGeneral = ({ prop1 }) => {
  const { id } = useSiteDetail()
  const {data, isLoading} = useGetSiteQuery({siteId: id})
  const [edit, setEdit] = React.useState(false)

  if (isLoading) return <AppLoader />
  return <Card>
    <Form disabled layout="vertical" initialValues={data?.data || {}}>
      <Step1 />
      <Step2 />
      <Step4 />
    </Form>
    <Divider />
    
    <div style={{width: '100%', display: 'flex', justifyContent: 'center', gap: '20px'}}>
      {!edit && <Button className='limited-min-width' type="primary" onClick={() => {
        setEdit(true)
      }}>Edit</Button>}
      {edit && <Button ghost type="primary" className='limited-min-width' icon={<ArrowLeftOutlined />} onClick={() => {
        setEdit(false)
      }}>Cancel</Button>}
      {edit && <Button className='limited-min-width' type="primary" onClick={() => {
        setEdit(false)
      }}>Save</Button>}
    </div>
  </Card>
}

export default SiteGeneral