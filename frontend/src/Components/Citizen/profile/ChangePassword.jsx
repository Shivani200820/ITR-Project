import {

TextField,

Button,

Stack,

Typography

}

from "@mui/material";


function ChangePassword(){


return(

<>


<Typography

variant="h6"

mb={2}

>

Change Password

</Typography>



<Stack spacing={2}>


<TextField

type="password"

label="Current Password"

/>



<TextField

type="password"

label="New Password"

/>



<TextField

type="password"

label="Confirm Password"

/>



<Button

variant="contained"

color="warning"

>

Update Password

</Button>



</Stack>


</>

)

}


export default ChangePassword;