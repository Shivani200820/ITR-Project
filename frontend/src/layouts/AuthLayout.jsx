import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#F4F8FB",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="sm">
        <Outlet />
      </Container>
    </Box>
  );
}

export default AuthLayout;