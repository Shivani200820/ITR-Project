import { Chip } from "@mui/material";

function ComplaintStatusChip({ status }) {
  const colorMap = {
    Pending: "warning",
    "In Progress": "info",
    Resolved: "success",
    Rejected: "error",
  };

  return (
    <Chip
      label={status}
      color={colorMap[status] || "default"}
      size="small"
      sx={{ fontWeight: 600 }}
    />
  );
}

export default ComplaintStatusChip;