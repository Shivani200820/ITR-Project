import {
  Paper,
  Typography,
  Divider,
  Stack,
} from "@mui/material";

function ComplaintSummary() {
  return (
    <Paper sx={{ p: 4, mb: 3 }}>
      <Typography
        variant="h6"
        mb={2}
      >
        Complaint Summary
      </Typography>

      <Divider sx={{ mb: 2 }} />

      <Stack spacing={2}>
        <Typography>
          Complaint ID: CIV-2026-001
        </Typography>

        <Typography>
          Category: Road Damage
        </Typography>

        <Typography>
          Department: Road Department
        </Typography>

        <Typography>
          Priority: High
        </Typography>

        <Typography>
          Date: 16 July 2026
        </Typography>

        <Typography>
          Status: Pending
        </Typography>
      </Stack>
    </Paper>
  );
}

export default ComplaintSummary;