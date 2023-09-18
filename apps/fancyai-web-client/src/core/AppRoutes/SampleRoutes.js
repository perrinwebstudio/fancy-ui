import React from "react";
import { RoutePermittedRole } from "@crema/constants/AppEnums";

const Sites = React.lazy(() => import("../../modules/pages/Sites"));
const TeamMembers = React.lazy(() => import("../../modules/pages/TeamMembers"));
const Settings = React.lazy(() => import("../../modules/pages/Settings"));

export const samplePagesConfigs = [
  {
    permittedRole: RoutePermittedRole.User,
    path: "/pages/sites",
    element: <Sites />,
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
];
