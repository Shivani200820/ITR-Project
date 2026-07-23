import {
Box,
Typography,
Paper
}
from "@mui/material";


import ProfileForm from "../../components/admin/settings/ProfileForm";

import ChangePassword from "../../components/admin/settings/ChangePassword";

import SystemSettings from "../../components/admin/settings/SystemSettings";



function AdminSettings(){

return(

<Box>


<Typography

variant="h4"

fontWeight="bold"

mb={3}

>

Admin Settings

</Typography>



<Paper

sx={{

p:3,

mb:3,

borderRadius:4

}}

>

<ProfileForm/>

</Paper>




<Paper

sx={{

p:3,

mb:3,

borderRadius:4

}}

>

<ChangePassword/>

</Paper>




<Paper

sx={{

p:3,

borderRadius:4

}}

>

<SystemSettings/>

</Paper>



</Box>

)

}


export default AdminSettings;