import { Box, CircularProgress, Typography } from "@mui/material";

function AILoading() {
  return (
    <Box textAlign="center" py={5}>
      <CircularProgress size={60} />

      <Typography mt={3} variant="h6">
        AI is analyzing your complaint...
      </Typography>

      <Typography color="text.secondary">
        Detecting category, priority and department.
      </Typography>
    </Box>
  );
}

export default AILoading;