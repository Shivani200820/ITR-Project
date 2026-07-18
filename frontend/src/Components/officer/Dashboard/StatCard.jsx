import { Card, CardContent, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid";

import AssignmentIcon from "@mui/icons-material/Assignment";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import EngineeringIcon from "@mui/icons-material/Engineering";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import StatCard from "./StatCard";

function StatsCards() {
  return (
    <Grid container spacing={3} mt={2}>

      <Grid item xs={12} sm={6} lg={3}>
        <StatCard
          title="Total Complaints"
          value="245"
          color="#1565C0"
          icon={<AssignmentIcon />}
        />
      </Grid>

      <Grid item xs={12} sm={6} lg={3}>
        <StatCard
          title="Pending"
          value="34"
          color="#F59E0B"
          icon={<PendingActionsIcon />}
        />
      </Grid>

      <Grid item xs={12} sm={6} lg={3}>
        <StatCard
          title="In Progress"
          value="21"
          color="#0EA5E9"
          icon={<EngineeringIcon />}
        />
      </Grid>

      <Grid item xs={12} sm={6} lg={3}>
        <StatCard
          title="Resolved"
          value="190"
          color="#10B981"
          icon={<CheckCircleIcon />}
        />
      </Grid>

    </Grid>
  );
}

function StatCard({ title, value, icon, color }) {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 4,
        border: "1px solid #E5E7EB",
        transition: ".3s",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 12px 30px rgba(0,0,0,.12)",
        },
      }}
    >
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography
              color="text.secondary"
              fontSize={15}
            >
              {title}
            </Typography>

            <Typography
              variant="h4"
              fontWeight="bold"
              mt={1}
            >
              {value}
            </Typography>
          </Box>

          <Box
            sx={{
              background: color,
              color: "#fff",
              borderRadius: "50%",
              width: 55,
              height: 55,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {icon}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default StatCard;