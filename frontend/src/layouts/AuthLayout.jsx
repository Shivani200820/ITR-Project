import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <Box
      sx={{
        minHeight:"100vh",
        background:"linear-gradient(135deg,#E3F2FD,#FFFFFF)",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
      }}
    >

      <Container maxWidth="sm">
        <Outlet/>
      </Container>

    </Box>
  );
}

export default AuthLayout;