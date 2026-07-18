import { Paper, Typography } from "@mui/material";

function WelcomeBanner() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        borderRadius: 4,
        background:
          "linear-gradient(135deg,#1565C0,#42A5F5)",
        color: "#fff",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
      >
        Welcome Back, Officer 👮
      </Typography>

      <Typography mt={2}>
        Manage complaints efficiently and improve city services.
      </Typography>
    </Paper>
  );
}

export default WelcomeBanner;