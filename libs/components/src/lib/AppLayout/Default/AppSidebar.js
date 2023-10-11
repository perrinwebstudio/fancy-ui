import React from 'react';
import PropTypes from 'prop-types';
import PropsTypes from 'prop-types';
import CompanyInfo from '../components/CompanyInfo';
import clsx from 'clsx';
import AppVerticalMenu from '../components/AppVerticalNav';
import { useSidebarContext } from '@crema/context/SidebarContextProvider';
import {
  StyledAppMainSidebar,
  StyledAppSidebarScrollbar,
} from './index.styled';

const AppSidebar = ({ isCollapsed, routesConfig }) => {
  const { allowSidebarBgImage } = useSidebarContext();

  return (
    <StyledAppMainSidebar
      className={clsx({
        'sidebar-img-background': allowSidebarBgImage,
      })}
      collapsible
      breakpoint='xl'
      collapsed={isCollapsed}
    >
      <CompanyInfo isCollapsed={isCollapsed} />
      <StyledAppSidebarScrollbar scrollToTop={false}>
        <AppVerticalMenu routesConfig={routesConfig} />
      </StyledAppSidebarScrollbar>
    </StyledAppMainSidebar>
  );
};

export default AppSidebar;

AppSidebar.propTypes = {
  routesConfig: PropsTypes.array.isRequired,
  isCollapsed: PropTypes.bool,
};
