import {
  Paper,
  Typography,
} from "@mui/material";

function OfficerRemarks() {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography
        variant="h6"
        mb={2}
      >
        Officer Remarks
      </Typography>

      <Typography>
        The repair team has been assigned.
        Repair work is scheduled for tomorrow morning.
      </Typography>
    </Paper>
  );
}

export default OfficerRemarks;