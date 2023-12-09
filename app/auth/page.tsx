import { CheckOTPForm, SendOTPForm } from "@/features";

const AuthPage = () => {
  return (
    <div className="container max-w-md">
      <SendOTPForm />
      {/* <CheckOTPForm /> */}
    </div>
  );
};

export default AuthPage;
