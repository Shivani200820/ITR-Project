import {
  Paper,
  Typography,
  Grid,
  Box,
} from "@mui/material";

function ComplaintImages() {
  return (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Typography
        variant="h6"
        mb={2}
      >
        Complaint Images
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              height: 220,
              bgcolor: "#eeeeee",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 2,
            }}
          >
            Before Image
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              height: 220,
              bgcolor: "#eeeeee",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 2,
            }}
          >
            After Image
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ComplaintImages;