import { Chip } from "@mui/material";

function PriorityBadge({ priority }) {

  const colors = {
    High: "error",
    Medium: "warning",
    Low: "success",
  };

  return (
    <Chip
      label={priority}
      color={colors[priority]}
      size="small"
    />
  );
}

export default PriorityBadge;