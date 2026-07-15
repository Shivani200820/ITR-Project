import {
  Typography,
  Paper,
} from "@mui/material";

function Dashboard() {
  return (
    <Paper
      sx={{
        p: 5,
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
      >
        Welcome to CivicAI 👋
      </Typography>

      <Typography mt={2}>
        This is the Citizen Dashboard.
      </Typography>
    </Paper>
  );
}

export default Dashboard;