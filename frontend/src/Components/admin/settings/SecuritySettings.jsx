import {

Paper,

Typography,

Button,

Stack

}

from "@mui/material";


function SecuritySettings(){


return(

<Paper

sx={{

p:4,

borderRadius:4

}}

>


<Typography

variant="h6"

fontWeight="bold"

mb={3}

>

🔐 Security Settings

</Typography>



<Stack spacing={2}>


<Button

variant="outlined"

>

Change Admin Password

</Button>



<Button

variant="outlined"

>

Manage User Permissions

</Button>



<Button

variant="outlined"

>

View Activity Logs

</Button>



</Stack>


</Paper>

)

}


export default SecuritySettings;