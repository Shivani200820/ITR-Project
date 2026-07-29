import {
  Stack,
  IconButton,
  Tooltip,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

function ActionButtons() {
  return (
    <Stack direction="row">

      <Tooltip title="View Details">
        <IconButton color="primary">
          <VisibilityIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Accept">
        <IconButton color="success">
          <CheckIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Reject">
        <IconButton color="error">
          <CloseIcon />
        </IconButton>
      </Tooltip>

    </Stack>
  );
}

export default ActionButtons;