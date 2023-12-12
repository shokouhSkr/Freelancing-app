import { AuthContainer, Container } from "@/features";

const AuthPage = () => {
  return (
    <Container>
      <div className="flex justify-center pt-10">
        <AuthContainer />
      </div>
    </Container>
  );
};

export default AuthPage;
