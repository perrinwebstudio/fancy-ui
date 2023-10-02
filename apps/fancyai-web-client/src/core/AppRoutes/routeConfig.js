import React from "react";
import { FaFileInvoiceDollar, FaPager } from "react-icons/fa";
import { PiUserListBold } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";

const routesConfig = [
  {
    id: "sites",
    title: "Sites",
    messageId: "sidebar.sites",
    path: "/pages/sites",
    icon: <FaPager />,
  },
  {
    id: "team_members",
    title: "Team Members",
    messageId: "sidebar.team_members",
    path: "/pages/team_members",
    icon: <PiUserListBold />,
  },
  {
    id: "billing",
    title: "Billing",
    messageId: "sidebar.billing",
    path: "/pages/billing",
    icon: <FaFileInvoiceDollar />,
  },
];
export default routesConfig;
