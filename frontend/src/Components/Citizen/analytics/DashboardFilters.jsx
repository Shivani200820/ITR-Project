import {
  Grid,
  MenuItem,
  TextField,
} from "@mui/material";

function DashboardFilters() {
  return (
    <Grid container spacing={2} mb={3}>
      <Grid item xs={12} md={4}>
        <TextField
          fullWidth
          select
          label="Department"
          defaultValue="All"
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Road">
            Road Department
          </MenuItem>
          <MenuItem value="Water">
            Water Supply
          </MenuItem>
          <MenuItem value="Garbage">
            Garbage
          </MenuItem>
        </TextField>
      </Grid>

      <Grid item xs={12} md={4}>
        <TextField
          fullWidth
          select
          label="Status"
          defaultValue="All"
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Pending">
            Pending
          </MenuItem>
          <MenuItem value="Resolved">
            Resolved
          </MenuItem>
          <MenuItem value="In Progress">
            In Progress
          </MenuItem>
        </TextField>
      </Grid>

      <Grid item xs={12} md={4}>
        <TextField
          fullWidth
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          label="Select Date"
        />
      </Grid>
    </Grid>
  );
}

export default DashboardFilters;