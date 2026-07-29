import { Stack, IconButton, Tooltip } from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { useNavigate } from "react-router-dom";


function ComplaintActionButtons({
  complaintId,
  onEdit,
  onDelete
}) {

  const navigate = useNavigate();


  return (
    <Stack direction="row" spacing={1}>

      {/* View Button */}
      <Tooltip title="View">
        <IconButton
          color="primary"
          onClick={() =>
            navigate(`/citizen/complaints/${complaintId}`)
          }
        >
          <VisibilityIcon />
        </IconButton>
      </Tooltip>


      {/* Edit Button */}
      <Tooltip title="Edit">
        <IconButton
          color="warning"
          onClick={onEdit}
        >
          <EditIcon />
        </IconButton>
      </Tooltip>


      {/* Delete Button */}
      <Tooltip title="Delete">
        <IconButton
          color="error"
          onClick={onDelete}
        >
          <DeleteIcon />
        </IconButton>
      </Tooltip>


    </Stack>
  );
}

export default ComplaintActionButtons;