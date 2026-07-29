import Grid from "@mui/material/Grid";

import PeopleIcon from "@mui/icons-material/People";
import EngineeringIcon from "@mui/icons-material/Engineering";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import DashboardStatCard from "./DashboardStatCard";

function DashboardStats() {
  return (
    <Grid container spacing={3}>

      <Grid item xs={12} sm={6} lg={3}>
        <DashboardStatCard
          title="Total Users"
          value="1,250"
          icon={<PeopleIcon />}
          color="#2563EB"
        />
      </Grid>

      <Grid item xs={12} sm={6} lg={3}>
        <DashboardStatCard
          title="Officers"
          value="85"
          icon={<EngineeringIcon />}
          color="#7C3AED"
        />
      </Grid>

      <Grid item xs={12} sm={6} lg={3}>
        <DashboardStatCard
          title="Complaints"
          value="3,240"
          icon={<AssignmentIcon />}
          color="#F59E0B"
        />
      </Grid>

      <Grid item xs={12} sm={6} lg={3}>
        <DashboardStatCard
          title="Resolved"
          value="2,980"
          icon={<CheckCircleIcon />}
          color="#10B981"
        />
      </Grid>

    </Grid>
  );
}

export default DashboardStats;