import { TextField } from "@mui/material";

function ComplaintSearch() {
  return (
    <TextField
      fullWidth
      placeholder="Search complaints..."
      sx={{ mb: 3 }}
    />
  );
}

export default ComplaintSearch;