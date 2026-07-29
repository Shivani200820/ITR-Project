import {
  Paper,
  Stack,
  TextField,
  MenuItem,
  Typography,
} from "@mui/material";

const priorities = ["High", "Medium", "Low"];

const departments = [
  "Road Department",
  "Sanitation",
  "Water Supply",
  "Electricity",
];

function AIAnalysisCard({ data }) {

  data = data || {};

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Stack spacing={3}>

        <Typography variant="h6">
          AI Generated Details
        </Typography>

        <TextField
          label="Category"
          defaultValue={data.category || "Road Damage"}
          fullWidth
        />

        <TextField
          select
          label="Department"
          defaultValue={data.department || "Road Department"}
          fullWidth
        >
          {departments.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          label="Priority"
          defaultValue={data.priority || "High"}
          fullWidth
        >
          {priorities.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          multiline
          rows={5}
          label="Generated Description"
          defaultValue={
            data.description ||
            "A pothole has been detected on the road. Immediate repair is recommended for public safety."
          }
          fullWidth
        />

      </Stack>
    </Paper>
  );
}

export default AIAnalysisCard;