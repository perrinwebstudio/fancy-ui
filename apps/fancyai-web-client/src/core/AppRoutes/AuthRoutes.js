import React from "react";
import Verify2FaPage from "../../modules/auth/2FA";

const Signin = React.lazy(() => import("../../modules/auth/Signin"));
const Signup = React.lazy(() => import("../../modules/auth/Signup"));
const ForgotPassword = React.lazy(() =>
  import("../../modules/auth/ForgetPassword")
);
const ConfirmSignupAwsCognito = React.lazy(() =>
  import("../../modules/auth/Signup/ConfirmSignupAwsCognito")
);
const ResetPasswordAwsCognito = React.lazy(() =>
  import("../../modules/auth/ResetPassword")
);
const SignupConfirm = React.lazy(() =>
  import("../../modules/auth/SignupConfirm")
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
    path: "/confirm-signup",
    element: <ConfirmSignupAwsCognito />,
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
    path: "/verify-2fa",
    element: <Verify2FaPage />,
  },
];
