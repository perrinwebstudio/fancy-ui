import React from 'react';
import { SEOPlanPicker } from '@crema/modules/siteSetup';
import { Button, Card, Divider, Form, Space } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useGetSiteQuery, useUpdateSiteMutation } from 'apps/fancyai-web-client/src/core/api/apiSite';
import { useSiteDetail } from '@crema/modules/siteDetail';

const SiteBilling = () => {
  const { id } = useSiteDetail()
  const {data, isLoading} = useGetSiteQuery({siteId: id})
  const [update, { isLoading: isUpdating }] = useUpdateSiteMutation()
  const [edit, setEdit] = React.useState(false)
  const [form] = Form.useForm()

  return <>
    <Card>
      <Form
        form={form}
        onFinish={() => {
          console.log('form.getFieldsValue()', form.getFieldsValue())
          update({siteId: id, site: form.getFieldsValue(), showNotification: true})
        }} 
        disabled={!edit} layout="vertical" initialValues={data?.data || {}}
      >
        <Form.Item name="billingPlan">
          <SEOPlanPicker viewMode={!edit} buttonLabel={"Try Now"} />
        </Form.Item>
      </Form>

      <Divider />

      <div style={{width: '100%', display: 'flex', justifyContent: 'center', gap: '20px'}}>
        {!edit && <Button
          loading={isUpdating}
          className='limited-min-width'
          type="primary"
          onClick={() => {
            setEdit(true)
          }}
        >Edit</Button>}
        {edit && <Button
          loading={isUpdating}
          ghost type="primary"
          className='limited-min-width'
          icon={<ArrowLeftOutlined />}
          onClick={() => {
            setEdit(false)
          }}
        >Cancel</Button>}
        {edit && <Button
          loading={isUpdating} className='limited-min-width' type="primary"
          onClick={() => {
            form.submit()
            setEdit(false)
          }}
        >Confirm Changes</Button>}
      </div>
    </Card>
  </>
}

export default SiteBilling