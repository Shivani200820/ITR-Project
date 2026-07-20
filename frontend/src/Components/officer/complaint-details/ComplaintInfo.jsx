import { Paper, Typography, Stack } from "@mui/material";

function ComplaintInfo() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 4,
      }}
    >
      <Typography variant="h6" mb={2}>
        Complaint Details
      </Typography>

      <Stack spacing={1}>
        <Typography><strong>Category:</strong> Road Damage</Typography>
        <Typography><strong>Department:</strong> Road Department</Typography>
        <Typography><strong>Priority:</strong> High</Typography>
        <Typography><strong>Citizen:</strong> Rahul Patil</Typography>
        <Typography><strong>Date:</strong> 15 Jul 2026</Typography>
      </Stack>
    </Paper>
  );
}

export default ComplaintInfo;