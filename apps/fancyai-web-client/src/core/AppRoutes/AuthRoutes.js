import React from "react";
import Verify2FaPage from "../../modules/auth/2FA";
import SocialTokenCallback from "../../modules/auth/SocialTokenCallback";

const Signin = React.lazy(() => import("../../modules/auth/Signin"));
const Signup = React.lazy(() => import("../../modules/auth/Signup"));
const ForgotPassword = React.lazy(() =>
  import("../../modules/auth/ForgetPassword")
);
const ResetPasswordAwsCognito = React.lazy(() =>
  import("../../modules/auth/ResetPassword")
);
const SignupConfirm = React.lazy(() =>
  import("../../modules/auth/SignupConfirm")
);
const SignupConfirmed = React.lazy(() =>
  import("../../modules/auth/SignupConfirmed")
);
export const authRouteConfig = [
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forget-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPasswordAwsCognito />,
  },
  {
    path: "/signup_confirm",
    element: <SignupConfirm />,
  },
  {
    path: "/auth/signup/confirm",
    element: <SignupConfirmed />,
  },
  {
    path: "/verify-2fa",
    element: <Verify2FaPage />,
  },
  {
    path: "/social-token-callback",
    element: <SocialTokenCallback />,
  },
];
