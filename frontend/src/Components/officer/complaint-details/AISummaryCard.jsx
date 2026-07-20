import { Paper, Typography } from "@mui/material";

function AISummaryCard() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 4,
        mt: 3,
        bgcolor: "#E3F2FD",
      }}
    >
      <Typography variant="h6" mb={2}>
        🤖 AI Summary
      </Typography>

      <Typography>
        AI detected a damaged road with high confidence.
        Estimated repair priority is HIGH.
      </Typography>
    </Paper>
  );
}

export default AISummaryCard;