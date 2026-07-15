import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/citizen/Sidebar";
import DashboardHeader from "../components/citizen/DashboardHeader";

function CitizenLayout() {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1 }}>
        <DashboardHeader />

        <Box sx={{ p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default CitizenLayout;