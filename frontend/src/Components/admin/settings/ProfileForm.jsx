import {

TextField,

Button,

Stack,

Typography

}

from "@mui/material";


function ProfileForm(){


return(

<>


<Typography

variant="h6"

mb={3}

>

Profile Information

</Typography>



<Stack spacing={2}>


<TextField

label="Full Name"

defaultValue="Admin User"

/>


<TextField

label="Email"

defaultValue="admin@civicai.com"

/>


<TextField

label="Phone Number"

/>



<Button

variant="contained"

>

Save Changes

</Button>


</Stack>


</>

)

}


export default ProfileForm;