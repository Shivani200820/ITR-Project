import { useParams } from "react-router-dom";

import AuthHeader from "../../components/auth/AuthHeader";
import LoginForm from "../../components/auth/LoginForm";

import {
  Box,
  Container,
} from "@mui/material";

// ❌ Removed useNotification because it was causing infinite re-render

function Login() {

  const { role = "citizen" } = useParams();

  return (

    <Box

      sx={{

        minHeight:"100vh",

        display:"flex",

        alignItems:"center",

        background:
          "linear-gradient(135deg,#E3F2FD,#FFFFFF)",

        py:5

      }}

    >

      <Container maxWidth="sm">

        <AuthHeader role={role} />

        <LoginForm role={role} />

      </Container>

    </Box>

  );

}

export default Login;