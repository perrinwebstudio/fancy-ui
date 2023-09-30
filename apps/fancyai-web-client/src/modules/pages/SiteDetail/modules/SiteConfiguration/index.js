import React from 'react';
import PropTypes from 'prop-types';
import { SiteDetailSubMenuHorizontal, useSiteDetail } from '@crema/modules/siteDetail';
import SiteBilling from './modules/Billing';
import SiteGeneral from './modules/General';
import SiteConnections from './modules/Connections';
import SiteMembers from './modules/Members';

const SiteConfiguration = ({ prop1 }) => {
  const {id, subMenu} = useSiteDetail()

  return <>
    <SiteDetailSubMenuHorizontal />
    {subMenu === 'general' && <SiteGeneral />}
    {subMenu === 'billing' && <SiteBilling />}
    {subMenu === 'connections' && <SiteConnections />}
    {subMenu === 'members' && <SiteMembers />}
  </>
}

export default SiteConfiguration