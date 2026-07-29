import {
  Grid,
  TextField,
  MenuItem,
} from "@mui/material";

function UserFilters() {
  return (
    <Grid container spacing={2}>

      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Search Users"
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextField
          select
          fullWidth
          label="Role"
          defaultValue=""
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Citizen">Citizen</MenuItem>
          <MenuItem value="Officer">Officer</MenuItem>
          <MenuItem value="Admin">Admin</MenuItem>
        </TextField>
      </Grid>

    </Grid>
  );
}

export default UserFilters;