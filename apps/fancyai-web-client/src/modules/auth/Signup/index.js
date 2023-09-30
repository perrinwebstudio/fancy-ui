import { StyledSignup } from "@crema/modules/userPages";
import { useUserSignupMutation } from "apps/fancyai-web-client/src/core/api/apiAuth";

const SignUp = () => {
  const [userSignup, { isLoading }] = useUserSignupMutation();

  return (
    <StyledSignup
      userSignup={userSignup}
      isLoggingIn={isLoading}
    ></StyledSignup>
  );
};

export default SignUp;
