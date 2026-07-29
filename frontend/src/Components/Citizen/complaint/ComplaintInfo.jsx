import {
  Paper,
  Typography,
  Grid,
  Chip,
} from "@mui/material";

function ComplaintInfo() {
  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 3,
      }}
    >
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Road Damage
      </Typography>

      <Chip
        label="Pending"
        color="warning"
        sx={{ mb: 3 }}
      />

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography color="text.secondary">
            Description
          </Typography>

          <Typography>
            Large pothole causing heavy traffic and accidents.
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography color="text.secondary">
            Department
          </Typography>

          <Typography>
            Road Department
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography color="text.secondary">
            Priority
          </Typography>

          <Typography color="error">
            High
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography color="text.secondary">
            Complaint ID
          </Typography>

          <Typography>
            CMP-101
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography color="text.secondary">
            Date
          </Typography>

          <Typography>
            24 July 2026
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ComplaintInfo;