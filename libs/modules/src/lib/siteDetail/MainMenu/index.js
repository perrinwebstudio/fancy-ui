import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SITE_DETAIL_MENU_CONFIG } from '@crema/constants';
import { Radio, Space } from 'antd';
import useSiteDetail from '../useSiteDetail';
import StyledMainMenu from './StyledMainMenu';

const SiteDetailMainMenu = ({ prop1 }) => {
  const { id, mainMenu } = useSiteDetail()
  const navigate = useNavigate()

  return <>
    <StyledMainMenu direction="vertical" align="center" justify="center" >
      <Radio.Group onChange={(e) => {
        navigate(`/pages/sites/${id}/${e.target.value}`)
      }} size="middle" buttonStyle="solid" value={mainMenu}>
        {
          Object.values(SITE_DETAIL_MENU_CONFIG).map((item) => {
            return <Radio.Button key={item.key} value={item.key}>{item.text}</Radio.Button>
          })
        }
      </Radio.Group>
    </StyledMainMenu>
  </>
}

export default SiteDetailMainMenu