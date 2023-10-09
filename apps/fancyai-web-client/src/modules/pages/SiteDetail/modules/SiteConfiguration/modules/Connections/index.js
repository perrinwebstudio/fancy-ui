import React from 'react';
import { Button, Card, Divider, Form } from 'antd';
import { Step1, Step2, Step4, Step5, Step6 } from '@crema/modules/siteSetup';
import { useGetSiteQuery, useUpdateSiteMutation } from 'apps/fancyai-web-client/src/core/api/apiSite';
import { useSiteDetail } from '@crema/modules/siteDetail';
import AppLoader from '@crema/components/AppLoader';
import { ArrowLeftOutlined } from '@ant-design/icons';
import AppSiteGoogleProvider from 'apps/fancyai-web-client/src/modules/providers/AppSiteGoogleProvider';

const SiteConnections = ({ prop1 }) => {
  const { id } = useSiteDetail()
  const {data, isLoading} = useGetSiteQuery({siteId: id})
  const [update, { isLoading: isUpdating }] = useUpdateSiteMutation()

  const [form] = Form.useForm()

  const gaAccountId = Form.useWatch('gaAccountId', form)

  if (isLoading) return <AppLoader />
  return <Card>
      <Form onFinish={() => {
        update({siteId: id, site: form.getFieldsValue(), showNotification: true})
      }} form={form} layout="vertical" initialValues={data?.data || {}}>
        <AppSiteGoogleProvider selectedGaAccount={gaAccountId} siteId={id}>
          <Step5 />
        </AppSiteGoogleProvider>
        <Step6 sitePlatform={data?.data?.platform} />
      </Form>
    <Divider />
    
    <div style={{width: '100%', display: 'flex', justifyContent: 'center', gap: '20px'}}>
      <Button
        loading={isUpdating} className='limited-min-width' type="primary"
        onClick={() => {
          form.submit()
          setEdit(false)
        }}
      >Save</Button>
    </div>
  </Card>
}

export default SiteConnections