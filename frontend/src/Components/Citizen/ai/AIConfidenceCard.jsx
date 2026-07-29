import {
  Paper,
  Typography,
  LinearProgress,
  Box,
} from "@mui/material";

function AIConfidenceCard({ confidence }) {
  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 4,
      }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
      >
        AI Confidence
      </Typography>

      <Box mt={3}>
        <LinearProgress
          variant="determinate"
          value={confidence}
          sx={{
            height: 12,
            borderRadius: 10,
          }}
        />

        <Typography
          mt={2}
          align="center"
          fontWeight="bold"
        >
          {confidence}% Accurate
        </Typography>
      </Box>
    </Paper>
  );
}

export default AIConfidenceCard;