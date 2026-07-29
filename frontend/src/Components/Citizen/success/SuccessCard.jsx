import {
  Paper,
  Typography,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function SuccessCard() {
  return (
    <Paper
      sx={{
        p: 5,
        textAlign: "center",
        mb: 3,
      }}
    >
      <CheckCircleIcon
        color="success"
        sx={{ fontSize: 80 }}
      />

      <Typography
        variant="h4"
        mt={2}
        fontWeight="bold"
      >
        Complaint Submitted Successfully!
      </Typography>

      <Typography mt={2}>
        Your complaint has been received and is under review.
      </Typography>
    </Paper>
  );
}

export default SuccessCard;