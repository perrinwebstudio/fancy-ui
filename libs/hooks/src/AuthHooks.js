import { useSelector } from "react-redux";

export const useAuthUser = () => {
  const auth = useSelector((state) => state.authSlice);
  const isAuthenticated = !!auth.currentUser;
  const isLoading = false;

  return {
    isLoading,
    isAuthenticated,
    user: auth.currentUser || null,
    companies: auth.companies || [],
    apiToken: auth.apiToken || null,
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
