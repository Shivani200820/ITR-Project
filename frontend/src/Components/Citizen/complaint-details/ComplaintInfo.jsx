import {
  Paper,
  Typography,
  Chip,
  Stack,
} from "@mui/material";

function ComplaintInfo() {
  return (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Typography
        variant="h5"
        fontWeight="bold"
      >
        Road Damage
      </Typography>

      <Typography mt={2}>
        Large pothole near the traffic signal causing accidents.
      </Typography>

      <Stack
        direction="row"
        spacing={2}
        mt={3}
      >
        <Chip
          label="Pending"
          color="warning"
        />

        <Chip
          label="High Priority"
          color="error"
        />

        <Chip
          label="Road Department"
          color="primary"
        />
      </Stack>
    </Paper>
  );
}

export default ComplaintInfo;