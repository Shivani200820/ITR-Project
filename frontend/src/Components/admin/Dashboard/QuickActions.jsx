import {
  Paper,
  Typography,
  Button,
  Stack,
} from "@mui/material";

function QuickActions() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 4,
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
          Add Officer
        </Button>

        <Button variant="outlined">
          Add Department
        </Button>

        <Button variant="outlined">
          View Reports
        </Button>
      </Stack>
    </Paper>
  );
}

export default QuickActions;