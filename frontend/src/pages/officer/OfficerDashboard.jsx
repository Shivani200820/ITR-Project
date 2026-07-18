import { Grid } from "@mui/material";

import WelcomeBanner from "../../components/officer/dashboard/WelcomeBanner";
import StatsCards from "../../components/officer/dashboard/StatsCards";
import QuickActions from "../../components/officer/dashboard/QuickActions";
import RecentActivity from "../../components/officer/dashboard/RecentActivity";

function OfficerDashboard() {
  return (
    <>
      <WelcomeBanner />

      <StatsCards />

      <Grid container spacing={3} mt={1}>

        <Grid item xs={12} md={6}>
          <QuickActions />
        </Grid>

        <Grid item xs={12} md={6}>
          <RecentActivity />
        </Grid>

      </Grid>
    </>
  );
}

export default OfficerDashboard;