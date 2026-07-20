import {
  Box,
  Stack,
} from "@mui/material";


import WelcomeCard from "../../components/citizen/dashboard/WelcomeCard";
import SummaryCards from "../../components/citizen/dashboard/SummaryCards";
import QuickActions from "../../components/citizen/dashboard/QuickActions";
import RecentComplaints from "../../components/citizen/dashboard/RecentComplaints";


function Dashboard() {


  return (

    <Box>

      <Stack spacing={3}>

        <WelcomeCard />

        <SummaryCards />

        <QuickActions />

        <RecentComplaints />

      </Stack>


    </Box>

  );

}


export default Dashboard;