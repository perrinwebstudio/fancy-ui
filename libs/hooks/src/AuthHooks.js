import { useDispatch, useSelector } from "react-redux";
import { setShowEmailConfirmPopup } from "apps/fancyai-web-client/src/core/redux/features/auth/slice";

export const useAuthUser = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.authSlice);
  const isAuthenticated = !!auth.currentUser;
  const isLoading = false;
  const isEmailVerified =
    auth?.currentUser?.signupConfirmed &&
    auth?.currentUser?.emailChangeConfirmed;

  return {
    isLoading,
    isAuthenticated,
    isEmailVerified,
    showEmailConfirmPopup: auth.showEmailConfirmPopup,
    setShowEmailConfirmPopup: (val) => dispatch(setShowEmailConfirmPopup(val)),
    user: auth.currentUser || null,
    companies: auth.companies || [],
    apiToken: auth.apiToken || null,
    verify2FAToken: auth.verify2FAToken || null,
  };
};

/*
// For AWS Auth
import {getUserFromAWS} from '@crema/helpers';
import {
  useAwsCognito,
  useAwsCognitoActions,
} from '@crema/services/auth/AWSAuthProvider';

export const useAuthUser = () => {
  const {auth, user, isAuthenticated, isLoading} = useAwsCognito();
  return {
    auth,
    isLoading,
    isAuthenticated,
    user: getUserFromAWS(user),
  };
};

export const useAuthMethod = () => {
  const {
    signIn,
    signUpCognitoUser,
    confirmCognitoUserSignup,
    logout,
  } = useAwsCognitoActions();

  return {
    signIn,
    signUpCognitoUser,
    confirmCognitoUserSignup,
    logout,
  };
};*/
/*

//For Auth0
import { useAuth0 } from "@auth0/auth0-react";
import { useMemo } from "react";
import { getUserFromAuth0 } from "./helper/AuthHelper";

export const useAuthUser = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return {
    isLoading,
    isAuthenticated,
    user: useMemo(() => getUserFromAuth0(user), []),
  };
};

export const useAuthMethod = () => {
  const { loginWithRedirect, logout } = useAuth0();
  return { loginWithRedirect, logout };
};
*/
