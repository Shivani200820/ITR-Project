import { useParams } from "react-router-dom";

import AuthHeader from "../../components/auth/AuthHeader";
import RegisterForm from "../../components/auth/RegisterForm";


function Register() {

  const { role = "citizen" } = useParams();


  return (
    <>
      <AuthHeader role={role} />

      <RegisterForm role={role} />
    </>
  );
}


export default Register;