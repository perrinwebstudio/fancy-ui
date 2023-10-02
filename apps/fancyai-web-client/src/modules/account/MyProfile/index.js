import React from "react";

import { AiOutlineLock } from "react-icons/ai";
import { HiOutlineKey } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
import IntlMessages from "@crema/helpers/IntlMessages";
import {
  StyledUserProfileContainer,
  StyledUserProfileTabs,
  StyledUserProfileTitle,
} from "./index.styled";
import AppAnimate from "@crema/components/AppAnimate";
import { Typography } from "antd";
import {
  ChangePassword,
  PersonalInfo,
  TwoFactorAuthentication,
} from "./components";

const items = [
  {
    label: (
      <span className="user-profile-icon">
        <BiUser className="icon" />
        <span>
          <IntlMessages id="userProfile.personalInfo" />
        </span>
      </span>
    ),
    key: "01",
    children: <PersonalInfo />,
  }, // remember to pass the key prop
  {
    label: (
      <span className="user-profile-icon">
        <AiOutlineLock className="icon" />
        <span>
          <IntlMessages id="userProfile.changePassword" />
        </span>
      </span>
    ),
    key: "02",
    children: <ChangePassword />,
  },
  {
    label: (
      <span className="user-profile-icon">
        <HiOutlineKey className="icon" />
        <span>
          <IntlMessages id="userProfile.two_factor" />
        </span>
      </span>
    ),
    key: "03",
    children: <TwoFactorAuthentication />,
  },
];

const UserProfile = () => {
  return (
    <StyledUserProfileContainer>
      <StyledUserProfileTitle>My Profile</StyledUserProfileTitle>
      <AppAnimate animation="transition.slideUpIn" delay={200}>
        <StyledUserProfileTabs
          key="1"
          defaultActiveKey="01"
          tabPosition="left"
          items={items}
        />
      </AppAnimate>
    </StyledUserProfileContainer>
  );
};

export default UserProfile;
