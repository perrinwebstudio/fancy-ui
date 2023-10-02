import React, { useMemo, useState } from 'react';
import AppsSideBarFolderItem from '@crema/components/AppsSideBarFolderItem';
import AppList from '@crema/components/AppList';
import ListEmptyResult from '@crema/components/AppList/ListEmptyResult';
import SidebarPlaceholder from '@crema/components/SidebarListSkeleton';
import {
  StyledMailSidebarContent,
  StyledMailSidebarList,
  StyledMailSidebarScrollbar,
  SubMenuVerticalWrapper,
} from './index.styled';
import { useNavigate } from 'react-router-dom';
import useSiteDetail from '../useSiteDetail';
import { SITE_DETAIL_MENU_CONFIG } from '@crema/constants';

const MailSidebar = () => {
  const { id, mainMenu } = useSiteDetail()

  const dataList = useMemo(() => {
    return Object.values(SITE_DETAIL_MENU_CONFIG[mainMenu].subMenu).map((item) => {
      return { id: item.key, name: item.text, alias: item.key, icon: item.icon || 'file-archive' }
    })
  }, [])

  return (
    <>
      {SITE_DETAIL_MENU_CONFIG[mainMenu]?.subMenu && <SubMenuVerticalWrapper bordered={false}>
        <StyledMailSidebarScrollbar>
          <StyledMailSidebarContent>
            <StyledMailSidebarList
              component='nav'
              aria-label='main mailbox folders'
            >
              <AppList
                data={dataList}
                ListEmptyComponent={
                  <ListEmptyResult
                    loading={true}
                    placeholder={<SidebarPlaceholder />}
                  />
                }
                renderItem={(item) => (
                  <AppsSideBarFolderItem
                    key={item.id}
                    item={item}
                    path={`/pages/sites/${id}/${mainMenu}/${item.id}`}
                  />
                )}
              />
            </StyledMailSidebarList>
          </StyledMailSidebarContent>
        </StyledMailSidebarScrollbar>
      </SubMenuVerticalWrapper>}
    </>
    
  );
};

export default MailSidebar;
