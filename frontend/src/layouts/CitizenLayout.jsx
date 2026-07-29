import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/citizen/Sidebar";
import DashboardHeader from "../components/citizen/DashboardHeader";


function CitizenLayout() {

  return (

    <Box

      sx={{

        display:"flex",

        minHeight:"100vh",

        bgcolor:"#F8FAFC"

      }}

    >

      {/* Sidebar */}

      <Sidebar />



      {/* Main Content */}

      <Box

        sx={{

          flexGrow:1,

          display:"flex",

          flexDirection:"column"

        }}

      >


        {/* Header */}

        <DashboardHeader />



        {/* Page Content */}

        <Box

          sx={{

            p:3,

            flexGrow:1

          }}

        >

          <Outlet />


        </Box>


      </Box>


    </Box>

  );

}


export default CitizenLayout;