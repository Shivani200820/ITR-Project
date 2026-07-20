import { Paper, Typography, Box } from "@mui/material";

function LocationCard() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 4,
      }}
    >
      <Typography variant="h6" mb={2}>
        📍 Complaint Location
      </Typography>

      <Box
        sx={{
          height: 250,
          bgcolor: "#ECEFF1",
          borderRadius: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        OpenStreetMap will be shown here
      </Box>
    </Paper>
  );
}

export default LocationCard;