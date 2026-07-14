import AuthHeader from "../../components/auth/AuthHeader";
import LoginForm from "../../components/auth/LoginForm";
import { useParams } from "react-router-dom";


function Login() {
  const { role } = useParams();

  return (
    <>
      <AuthHeader role={role} />
      <LoginForm />
    </>
  );
}

export default Login;