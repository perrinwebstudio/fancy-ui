import React from "react";
import { RoutePermittedRole } from "@crema/constants/AppEnums";
import SiteSetup from "../../modules/pages/SiteSetup";
import SiteDetail from "../../modules/pages/SiteDetail";
import TestPage from "../../modules/pages/test";

const Sites = React.lazy(() => import("../../modules/pages/Sites"));
const TeamMembers = React.lazy(() => import("../../modules/pages/TeamMembers"));
const Settings = React.lazy(() => import("../../modules/pages/Settings"));
const Billing = React.lazy(() => import("../../modules/pages/Billing"));

export const samplePagesConfigs = [
  {
    permittedRole: RoutePermittedRole.User,
    path: "/pages/sites",
    element: <Sites />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/pages/sites/add",
    element: <SiteSetup />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/pages/sites/:id/:mainMenu/:subMenu?",
    element: <SiteDetail />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/pages/team_members",
    element: <TeamMembers />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/pages/settings",
    element: <Settings />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/pages/billing",
    element: <Billing />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/test",
    element: <TestPage />,
  },
];
