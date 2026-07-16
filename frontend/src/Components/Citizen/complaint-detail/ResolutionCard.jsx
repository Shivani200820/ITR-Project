import {
  Paper,
  Typography,
  Button,
} from "@mui/material";

function ResolutionCard() {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography
        variant="h6"
        fontWeight="bold"
      >
        Complaint Status
      </Typography>

      <Typography mt={2}>
        Current Status:
        Pending
      </Typography>

      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 4 }}
      >
        Confirm Resolution
      </Button>
    </Paper>
  );
}

export default ResolutionCard;