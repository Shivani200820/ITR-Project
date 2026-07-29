import {
Dialog,
DialogTitle,
DialogActions,
Button
}
from "@mui/material";



function ConfirmDialog({

open,

onClose,

onConfirm

}){


return(

<Dialog open={open}>


<DialogTitle>

Are you sure you want to delete?

</DialogTitle>



<DialogActions>


<Button onClick={onClose}>

Cancel

</Button>



<Button

color="error"

onClick={onConfirm}

>

Delete

</Button>



</DialogActions>


</Dialog>

)

}


export default ConfirmDialog;