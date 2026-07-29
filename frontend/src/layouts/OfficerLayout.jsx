import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";

import OfficerNavbar from "../components/officer/layout/OfficerNavbar";
import OfficerSidebar from "../components/officer/layout/OfficerSidebar";

function OfficerLayout() {
  return (
    <Box sx={{ display: "flex" }}>

      <OfficerNavbar />

      <OfficerSidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#F8FAFC",
          minHeight: "100vh",
          p: 3,
        }}
      >
        <Toolbar />

        <Outlet />
      </Box>

    </Box>
  );
}

export default OfficerLayout;