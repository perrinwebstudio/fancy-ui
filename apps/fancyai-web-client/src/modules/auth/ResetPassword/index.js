import { StyledResetPassword } from "@crema/modules/userPages";
import { useResetPasswordMutation } from "apps/fancyai-web-client/src/core/api/apiAuth";

const ResetPassword = () => {
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  return (
    <>
      <StyledResetPassword
        resetPassword={resetPassword}
        isLoading={isLoading}
      ></StyledResetPassword>
    </>
  );
};

export default ResetPassword;
