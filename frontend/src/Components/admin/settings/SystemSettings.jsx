import {

Typography,

Switch,

FormControlLabel,

Stack

}

from "@mui/material";


function SystemSettings(){


return(

<>


<Typography

variant="h6"

mb={3}

>

System Settings

</Typography>



<Stack>


<FormControlLabel

control={<Switch defaultChecked/>}

label="Email Notifications"

/>



<FormControlLabel

control={<Switch defaultChecked/>}

label="AI Complaint Detection"

/>



<FormControlLabel

control={<Switch defaultChecked/>}

label="Live Map Tracking"

/>


</Stack>



</>

)

}


export default SystemSettings;