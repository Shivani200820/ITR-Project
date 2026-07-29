import {
  Paper,
  Typography,
} from "@mui/material";

function ComplaintLocation() {
  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 3,
      }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
      >
        Location
      </Typography>

      <Typography mt={2}>
        Kothrud, Pune
      </Typography>

      <Typography color="text.secondary">
        Latitude:
        18.5074
      </Typography>

      <Typography color="text.secondary">
        Longitude:
        73.8077
      </Typography>
    </Paper>
  );
}

export default ComplaintLocation;