import { Stack, TextField, MenuItem } from "@mui/material";

function ComplaintFilters() {
  return (
    <Stack direction="row" spacing={2} mb={3}>
      <TextField
        select
        label="Status"
        defaultValue=""
        sx={{ minWidth: 180 }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Pending">Pending</MenuItem>
        <MenuItem value="In Progress">In Progress</MenuItem>
        <MenuItem value="Resolved">Resolved</MenuItem>
      </TextField>

      <TextField
        select
        label="Priority"
        defaultValue=""
        sx={{ minWidth: 180 }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="High">High</MenuItem>
        <MenuItem value="Medium">Medium</MenuItem>
        <MenuItem value="Low">Low</MenuItem>
      </TextField>
    </Stack>
  );
}

export default ComplaintFilters;