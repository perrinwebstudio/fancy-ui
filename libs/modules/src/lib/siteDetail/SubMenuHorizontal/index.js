import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { SITE_DETAIL_MENU_CONFIG } from '@crema/constants';
import { Radio, Space } from 'antd';
import useSiteDetail from '../useSiteDetail';

const SiteDetailSubMenuHorizontal = ({ prop1 }) => {
  const navigate = useNavigate()
  const { id, mainMenu, subMenu } = useSiteDetail()

  return <>
    {SITE_DETAIL_MENU_CONFIG[mainMenu]?.subMenu && <Space style={{width: '100%'}} direction="vertical" align="center" justify="center" >
      <Radio.Group onChange={(e) => {
        navigate(`/pages/sites/${id}/${mainMenu}/${e.target.value}`)
      }} size="small" buttonStyle="solid" value={subMenu}>
        {
          Object.values(SITE_DETAIL_MENU_CONFIG[mainMenu].subMenu).map((item) => {
            return <Radio.Button key={item.key} value={item.key}>{item.text}</Radio.Button>
          })
        }
      </Radio.Group>
    </Space>}
  </>
}

export default SiteDetailSubMenuHorizontal