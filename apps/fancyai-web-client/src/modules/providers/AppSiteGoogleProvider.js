import React from 'react';
import PropTypes from 'prop-types';
import { SiteGoogleProvider } from '@crema/modules/siteGoogle';
import { useConnectGoogleServiceMutation, useGetGAAccountsMutation, useGetGSCSitesMutation, useGetSiteQuery } from '../../core/api/apiSite';
import AppLoader from '@crema/components/AppLoader';

const AppSiteGoogleProvider = ({ children, siteId, selectedGaAccount }) => {
  const {data, isLoading} = useGetSiteQuery({siteId}, {
    skip: !siteId
  })
  const [connect, { isLoading: isConnecting }] = useConnectGoogleServiceMutation()
  const [getGaList, { isLoading: isGettingGaList }] = useGetGAAccountsMutation()
  const [getGscList, { isLoading: isGettingGscList }] = useGetGSCSitesMutation()

  if (isLoading || !siteId) return <AppLoader />

  return <SiteGoogleProvider
    site={data?.data}
    isLoadingSite={isLoading}
    connect={connect}
    getGaList={getGaList}
    getGscList={getGscList}
    isMutating={isConnecting || isGettingGaList || isGettingGscList}
    selectedGaAccount={selectedGaAccount}
  >
    {children}
  </SiteGoogleProvider>
}

export default AppSiteGoogleProvider