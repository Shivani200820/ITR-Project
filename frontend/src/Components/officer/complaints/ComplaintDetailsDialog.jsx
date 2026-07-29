import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Grid,
  Chip,
  Divider
} from "@mui/material";


import ComplaintTimeline from "./ComplaintTimeline";

import ComplaintImagePreview from "./ComplaintImagePreview";


function ComplaintDetailsDialog({
  open,
  handleClose,
  complaint
}) {


if(!complaint)
return null;



return (

<Dialog

open={open}

onClose={handleClose}

maxWidth="md"

fullWidth

>


<DialogTitle>

Complaint Details

</DialogTitle>



<DialogContent>


<Grid container spacing={3}>


<Grid item xs={12} md={5}>

<ComplaintImagePreview/>

</Grid>



<Grid item xs={12} md={7}>


<Typography
variant="h6"
fontWeight="bold"
>

{complaint.category}

</Typography>



<Typography mt={2}>

Complaint ID :
{complaint.id}

</Typography>



<Typography>

Citizen :
{complaint.citizen}

</Typography>



<Typography>

Location :
{complaint.location}

</Typography>



<Typography mt={2}>

Description:

</Typography>


<Typography
color="text.secondary"
>

Large issue detected in this area.
Needs immediate attention.

</Typography>



<Divider sx={{my:2}}/>




<Chip

label={`Priority : ${complaint.priority}`}

color={
complaint.priority==="High"
?
"error"
:
"warning"
}

/>


<Chip

sx={{ml:1}}

label={complaint.status}

color="info"

/>



</Grid>



<Grid item xs={12}>

<ComplaintTimeline/>

</Grid>



</Grid>


</DialogContent>



<DialogActions>


<Button

onClick={handleClose}

>

Close

</Button>


<Button

variant="contained"

>

Update Status

</Button>


</DialogActions>



</Dialog>

)

}


export default ComplaintDetailsDialog;