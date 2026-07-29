import { Chip } from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";

function AIPriorityBadge({ priority }) {
  let color = "success";

  if (priority === "Medium") color = "warning";
  if (priority === "High") color = "error";

  return (
    <Chip
      icon={<WarningIcon />}
      label={`${priority} Priority`}
      color={color}
      sx={{
        fontWeight: "bold",
        fontSize: 15,
      }}
    />
  );
}

export default AIPriorityBadge;