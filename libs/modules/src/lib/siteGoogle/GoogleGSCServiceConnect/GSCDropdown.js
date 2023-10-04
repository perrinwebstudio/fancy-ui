import React, { useEffect, useState } from 'react';
import { useSiteGoogle } from '../SiteGoogleProvider';
import { Alert, Form, Select } from 'antd';

const GADropdown = ({ accountType }) => {
  const { site: siteData, getGscList, isMutating } = useSiteGoogle()

  const [gscList, setGscList] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    if (siteData._id) {
      getGscList({ siteId: siteData._id, type: accountType, redirectUri: location.protocol + '//' + location.host })
        .unwrap().then((res) => {
          console.log('res gsc', res)
          setGscList(res?.data || [])
          setError(null)
        }).catch((err) => {
          setGscList([])
          setError('Can not fetch Google Search Console account list. Please try refresh your page or re-connect your Google Account with the button below.')
        })
    }
  }, [siteData._id, siteData[accountType]?.access_token, accountType])

  if (error) {
    return <Alert style={{marginBottom: '20px'}} message={error} type="error" />
  }

  if (!isMutating && !gscList.length) {
    return <Alert style={{marginBottom: '20px'}} message="Can not find any Google Search Console associated with connected Google Account" type="warning" />
  }

  return <>
    <Form.Item name="gscPropertyId" label="Select Google Search Console Site">
      <Select loading={isMutating}>
        {gscList.map((item) => {
          return <Select.Option value={item.siteUrl}>{item.siteUrl}</Select.Option>
        })}
      </Select>
    </Form.Item>
  </>
}

export default GADropdown
