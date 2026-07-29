import {
  Paper,
  Typography,
} from "@mui/material";

function EmptyDuplicate() {
  return (
    <Paper
      sx={{
        p:6,
        textAlign:"center",
      }}
    >
      <Typography variant="h5">
        🎉 No Similar Complaints Found
      </Typography>

      <Typography mt={2}>
        You can safely create a new complaint.
      </Typography>
    </Paper>
  );
}

export default EmptyDuplicate;