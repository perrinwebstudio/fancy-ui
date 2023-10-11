import React, { useEffect } from "react";
import { useUrlSearchParams } from "use-url-search-params";
import AppContentView from "@crema/components/AppContentView";
import generateRoutes from "@crema/helpers/RouteGenerator";
import { Layouts } from "@crema/components/AppLayout";
import { useAuthUser } from "@crema/hooks/AuthHooks";
import {
  useLayoutActionsContext,
  useLayoutContext,
} from "@crema/context/LayoutContextProvider";
import { useSidebarActionsContext } from "@crema/context/SidebarContextProvider";
import {
  anonymousStructure,
  authorizedStructure,
  unAuthorizedStructure,
} from "../AppRoutes";
import { useRoutes } from "react-router-dom";
import routesConfig from "../AppRoutes/routeConfig";
import AuthWrapper from "./AuthWrapper";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { Modal } from "antd";

const AppLayout = () => {
  const { navStyle } = useLayoutContext();

  const { user, isAuthenticated, companies } = useAuthUser();
  const { updateNavStyle } = useLayoutActionsContext();
  const { updateMenuStyle, setSidebarBgImage } = useSidebarActionsContext();
  const AppLayout = Layouts[navStyle];
  const [params] = useUrlSearchParams();
  const generatedRoutes = generateRoutes({
    isAuthenticated: isAuthenticated,
    userRole: user?.role,
    unAuthorizedStructure,
    authorizedStructure,
    anonymousStructure,
  });
  const routes = useRoutes(generatedRoutes);
  useEffect(() => {
    if (params.layout) updateNavStyle(params.layout);
    if (params.menuStyle) updateMenuStyle(params.menuStyle);
    if (params.sidebarImage) setSidebarBgImage(true);
  }, [
    params.layout,
    params.menuStyle,
    params.sidebarImage,
    updateNavStyle,
    updateMenuStyle,
    setSidebarBgImage,
  ]);

  console.log('companies', companies)

  return (
    <>
      <ReactNotifications />
      { isAuthenticated && !companies?.[0] && <Modal footer={<></>} open>
        <div>Handle first company creation here</div>
      </Modal> }
      { isAuthenticated && companies?.[0] && <AppLayout routes={routes} routesConfig={routesConfig} /> }
      { !isAuthenticated && <AuthWrapper>
        <AppContentView routes={routes} />
      </AuthWrapper> }
    </>
  );
};

export default AppLayout;
