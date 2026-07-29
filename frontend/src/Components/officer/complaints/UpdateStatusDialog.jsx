import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

import StatusUpdateForm from "./StatusUpdateForm";


function UpdateStatusDialog({
  open,
  handleClose,
  complaint
}) {


return (

<Dialog
open={open}
onClose={handleClose}
maxWidth="sm"
fullWidth
>

<DialogTitle>
Update Complaint Status
</DialogTitle>


<DialogContent>

<StatusUpdateForm
complaint={complaint}
/>

</DialogContent>


<DialogActions>

<Button
onClick={handleClose}
>
Cancel
</Button>


<Button
variant="contained"
>
Save Changes
</Button>


</DialogActions>


</Dialog>

)

}


export default UpdateStatusDialog;