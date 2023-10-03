import React, { useMemo, useState } from 'react';
import { SITE_GOOGLE_ACCOUNT_TYPES } from '@crema/constants';
import ConnectGoogleForServices from '../../google/ConnectGoogleForServices';
import { Button } from 'antd';
import { useSiteGoogle } from '../SiteGoogleProvider';
import GADropdown from './GADropdown';

const SiteGoogleGAServiceConnect = () => {
  const { site: siteData, connect, isMutating } = useSiteGoogle()
  const { googleGeneralTokens, googleGATokens, googleGSCTokens } = siteData || {}

  const googleAccount = useMemo(() => {
    let accountType = googleGATokens ? 'googleGATokens' : googleGeneralTokens ? 'googleGeneralTokens' : null
    return {
      accountType,
      account: accountType ? siteData[accountType] : null
    }
  }, [siteData, googleGATokens, googleGSCTokens, googleGeneralTokens])

  const accountType = useMemo(() => {
    let _type = SITE_GOOGLE_ACCOUNT_TYPES.googleGeneralTokens
    if (googleGSCTokens) _type = SITE_GOOGLE_ACCOUNT_TYPES.googleGATokens

    return _type
  }, [])

  if (!googleAccount.account) {
    return <ConnectGoogleForServices
      isLoading={isMutating}
      label={'Sign In'}
      onSuccess={(response) => {
        const code = response.code
        connect({ siteId: siteData._id, code, type: accountType, redirectUri: location.protocol + '//' + location.host })
      }}
      Element={(props) => <Button block type="primary" {...props} disabled={false} />}
    />
  }

  return <div>
    <GADropdown accountType={accountType} />
    <ConnectGoogleForServices
      isLoading={isMutating}
      label={'Connect To Another Account'}
      onSuccess={(response) => {
        const code = response.code
        connect({ siteId: siteData._id, code, type: accountType, redirectUri: location.protocol + '//' + location.host })
      }}
      Element={(props) => <Button block type="primary" {...props} disabled={false} />}
    />
  </div>
}

export default SiteGoogleGAServiceConnect