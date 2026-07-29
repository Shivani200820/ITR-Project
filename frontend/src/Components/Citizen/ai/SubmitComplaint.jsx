import {
  Box,
  Button,
  LinearProgress,
  Typography,
} from "@mui/material";

function SubmitComplaint() {
  const navigate = useNavigate();
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
        onClick={() => navigate("/citizen/complaint-success")}
      >
        Submit Complaint
      </Button>

    </Box>
  );
}

export default SubmitComplaint;