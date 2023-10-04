import React, { useEffect, useMemo, useState } from 'react';
import { useSiteGoogle } from '../SiteGoogleProvider';
import { Alert, Form, Select } from 'antd';

const GADropdown = ({ accountType }) => {
  const { site: siteData, getGaList, isMutating, selectedGaAccount } = useSiteGoogle()

  const [gaList, setGaList] = useState([])
  const [error, setError] = useState(null)

  const propertyList = useMemo(() => {
    if (selectedGaAccount) {
      const account = gaList.find((item) => item.account === selectedGaAccount)
      if (!account) return []
      return account.propertySummaries || []
    }
    return []
  }, [selectedGaAccount, gaList])

  useEffect(() => {
    if (siteData._id) {
      getGaList({ siteId: siteData._id, type: accountType, redirectUri: location.protocol + '//' + location.host })
        .unwrap().then((res) => {
          setGaList(res?.data?.accountSummaries || [])
          setError(null)
        }).catch((err) => {
          setGaList([])
          setError('Can not fetch GA account list. Please try refresh your page or re-connect your Google Account with the button below.')
        })
    }
  }, [siteData._id, siteData[accountType]?.access_token, accountType])

  if (error) {
    return <Alert style={{marginBottom: '20px'}} message={error} type="error" />
  }

  if (!isMutating && !gaList.length) {
    return <Alert style={{marginBottom: '20px'}} message="Can not find any Google Analytics associated with connected Google Account" type="warning" />
  }

  return <>
    <Form.Item name="gaAccountId" label="Select Google Analytics Account">
      <Select loading={isMutating}>
        {gaList.map((item) => {
          return <Select.Option value={item.account}>{item.displayName}</Select.Option>
        })}
      </Select>
    </Form.Item>
    <Form.Item name="gaPropertyId" label="Select Google Analytics Property">
      <Select loading={isMutating}>
        {propertyList.map((item) => {
          return <Select.Option value={item.property}>{item.displayName}</Select.Option>
        })}
      </Select>
    </Form.Item>
  </>
}

export default GADropdown