import React from "react";
import PropTypes from "prop-types";
import {
  StyledAuth,
  StyledAuthMainContent,
  StyledAuthWrap,
  StyledMainAuthScrollbar,
} from "./AuthWrapper.styled";
import AppAnimateGroup from "@crema/components/AppAnimateGroup";
import AppInfoView from "@crema/components/AppInfoView";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

const AuthWrapper = ({ children }) => {
  return (
    <StyledAuth>
      <StyledMainAuthScrollbar>
        <AppAnimateGroup
          type="scale"
          animateStyle={{ flex: 1 }}
          delay={0}
          style={{ height: "100%" }}
          interval={10}
          duration={200}
        >
          <StyledAuthWrap key={"wrap"}>
            <ReactNotifications />
            <StyledAuthMainContent>{children}</StyledAuthMainContent>
          </StyledAuthWrap>
          <AppInfoView />
        </AppAnimateGroup>
      </StyledMainAuthScrollbar>
    </StyledAuth>
  );
};

export default AuthWrapper;

AuthWrapper.propTypes = {
  children: PropTypes.node,
};
