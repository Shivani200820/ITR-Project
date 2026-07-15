import { Paper, Typography } from "@mui/material";

function WelcomeCard() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";

  return (
    <Paper
      sx={{
        p: 4,
        mb: 4,
        borderRadius: 4,
        background:
          "linear-gradient(135deg,#1976D2,#42A5F5)",
        color: "white",
      }}
    >
      <Typography variant="h4" fontWeight="bold">
        {greeting} 👋
      </Typography>

      <Typography mt={2}>
        Welcome back to CivicAI.
        Report and track civic complaints easily.
      </Typography>
    </Paper>
  );
}

export default WelcomeCard;