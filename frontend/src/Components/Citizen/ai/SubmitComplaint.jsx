import {
  Box,
  Button,
  LinearProgress,
  Typography,
} from "@mui/material";

function SubmitComplaint() {
  return (
    <Box mt={4}>

      <Typography mb={1}>
        AI Confidence Score
      </Typography>

      <LinearProgress
        variant="determinate"
        value={92}
      />

      <Typography mt={1}>
        92% Confidence
      </Typography>

      <Button
        variant="contained"
        fullWidth
        size="large"
        sx={{ mt: 4 }}
      >
        Submit Complaint
      </Button>

    </Box>
  );
}

export default SubmitComplaint;