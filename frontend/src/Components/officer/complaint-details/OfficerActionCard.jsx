import {
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  MenuItem,
} from "@mui/material";

function OfficerActionCard() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 4,
      }}
    >
      <Typography variant="h6" mb={2}>
        Officer Actions
      </Typography>

      <TextField
        select
        fullWidth
        label="Status"
        defaultValue="Pending"
        sx={{ mb: 2 }}
      >
        <MenuItem value="Pending">Pending</MenuItem>
        <MenuItem value="In Progress">In Progress</MenuItem>
        <MenuItem value="Resolved">Resolved</MenuItem>
      </TextField>

      <TextField
        multiline
        rows={4}
        label="Remarks"
        fullWidth
      />

      <Button
        variant="outlined"
        component="label"
        sx={{ mt: 2 }}
      >
        Upload Repair Image
        <input hidden type="file" />
      </Button>

      <Stack
        direction="row"
        spacing={2}
        mt={3}
      >
        <Button
          variant="contained"
          color="success"
        >
          Resolve
        </Button>

        <Button
          variant="contained"
          color="error"
        >
          Reject
        </Button>
      </Stack>
    </Paper>
  );
}

export default OfficerActionCard;