import { Paper, Typography, Button, Stack } from "@mui/material";

function QuickActions() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 4,
        height: "100%",
      }}
    >
      <Typography
        variant="h6"
        mb={2}
      >
        Quick Actions
      </Typography>

      <Stack spacing={2}>
        <Button variant="contained">
          View Pending Complaints
        </Button>

        <Button variant="outlined">
          High Priority Complaints
        </Button>

        <Button variant="outlined">
          Today's Assignments
        </Button>
      </Stack>
    </Paper>
  );
}

export default QuickActions;