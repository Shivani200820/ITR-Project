import {
  Paper,
  TextField,
  MenuItem,
  Typography,
  Stack,
} from "@mui/material";

function AIEditableForm({
  category,
  setCategory,
  description,
  setDescription,
}) {
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
        mb={3}
      >
        Review AI Result
      </Typography>

      <Stack spacing={3}>
        <TextField
          select
          label="Category"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >
          <MenuItem value="Road Damage">
            Road Damage
          </MenuItem>

          <MenuItem value="Garbage">
            Garbage
          </MenuItem>

          <MenuItem value="Water Leakage">
            Water Leakage
          </MenuItem>

          <MenuItem value="Street Light">
            Street Light
          </MenuItem>
        </TextField>

        <TextField
          multiline
          rows={5}
          label="Complaint Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />
      </Stack>
    </Paper>
  );
}

export default AIEditableForm;