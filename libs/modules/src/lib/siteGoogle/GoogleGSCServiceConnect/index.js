import React, { useMemo, useState } from 'react';
import { SITE_GOOGLE_ACCOUNT_TYPES } from '@crema/constants';
import ConnectGoogleForServices from '../../google/ConnectGoogleForServices';
import { Button } from 'antd';
import { useSiteGoogle } from '../SiteGoogleProvider';
import GSCDropdown from './GSCDropdown';

const SiteGoogleGscServiceConnect = () => {
  const { site: siteData, connect, isMutating } = useSiteGoogle()
  const { googleGeneralTokens, googleGATokens, googleGSCTokens } = siteData || {}

  const googleAccount = useMemo(() => {
    let accountType = googleGSCTokens ? 'googleGSCTokens' : googleGeneralTokens ? 'googleGeneralTokens' : null
    return {
      accountType,
      account: accountType ? siteData[accountType] : null
    }
  }, [siteData, googleGATokens, googleGSCTokens, googleGeneralTokens])

  const toConnectAccountType = useMemo(() => {
    let _type = SITE_GOOGLE_ACCOUNT_TYPES.googleGeneralTokens
    if (googleGeneralTokens) _type = SITE_GOOGLE_ACCOUNT_TYPES.googleGSCTokens

    return _type
  }, [googleGeneralTokens])

  if (!googleAccount.account) {
    return <ConnectGoogleForServices
      isLoading={isMutating}
      label={'Sign In'}
      onSuccess={async (response) => {
        const code = response.code
        await connect({ siteId: siteData._id, code, type: toConnectAccountType, redirectUri: location.protocol + '//' + location.host })
      }}
      Element={(props) => <Button block type="primary" {...props} disabled={false} />}
    />
  }

  return <div>
    <GSCDropdown accountType={googleGSCTokens ? 'googleGSCTokens' : 'googleGeneralTokens'} />
    <ConnectGoogleForServices
      isLoading={isMutating}
      label={'Connect To Another Account'}
      onSuccess={async (response) => {
        console.log('s===============>', response)
        const code = response.code
        console.log('connect 11111')
        await connect({ siteId: siteData._id, code, type: toConnectAccountType, redirectUri: location.protocol + '//' + location.host }).unwrap().then((res) => {
          console.log('ressxx', res)
        }).catch((err) => {
          console.log('err', err)
        })
        console.log('connect 22??????')
      }}
      Element={(props) => <Button block type="primary" {...props} disabled={false} />}
    />
  </div>
}

export default SiteGoogleGscServiceConnect