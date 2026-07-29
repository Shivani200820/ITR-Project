import {
  Paper,
  Typography,
  Chip,
  Stack,
} from "@mui/material";

function AIResultCard({ result }) {
  if (!result) return null;

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        AI Analysis Result
      </Typography>

      <Stack spacing={2}>
        <Typography>
          <strong>Category:</strong> {result.category}
        </Typography>

        <Typography>
          <strong>Department:</strong> {result.department}
        </Typography>

        <Typography>
          <strong>Description:</strong>
          <br />
          {result.description}
        </Typography>

        <Stack direction="row" spacing={2} alignItems="center">
          <Typography>
            <strong>Priority:</strong>
          </Typography>

          <Chip
            label={result.priority}
            color="error"
          />
        </Stack>
      </Stack>
    </Paper>
  );
}

export default AIResultCard;