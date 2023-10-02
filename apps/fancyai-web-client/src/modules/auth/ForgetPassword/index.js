import { StyledForgetPassword } from "@crema/modules/userPages";
import { useForgotPasswordMutation } from "apps/fancyai-web-client/src/core/api/apiAuth";

const ForgetPassword = ({ prop1 }) => {
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

  return (
    <StyledForgetPassword
      forgetPassword={forgotPassword}
      isLoggingIn={isLoading}
    />
  );
};
export default ForgetPassword;
