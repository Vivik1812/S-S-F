import { loginWithGoogle } from "../service/AuthService";

const useLoginViewModel = () => {
  const handleGoogleLogin = () => {
    loginWithGoogle();
  };

  return {
    handleGoogleLogin,
  };
};

export default useLoginViewModel;
