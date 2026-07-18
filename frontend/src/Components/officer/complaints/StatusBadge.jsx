import { Chip } from "@mui/material";

function StatusBadge({ status }) {

  const colors = {
    Pending: "warning",
    Assigned: "info",
    Resolved: "success",
    Rejected: "error",
  };

  return (
    <Chip
      label={status}
      color={colors[status]}
      size="small"
    />
  );
}

export default StatusBadge;