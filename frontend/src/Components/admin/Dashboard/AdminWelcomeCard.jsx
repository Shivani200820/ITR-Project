import {
  Paper,
  Typography,
  Avatar,
  Stack
} from "@mui/material";


function AdminWelcomeCard(){

return(

<Paper

sx={{
p:4,
borderRadius:4
}}

>


<Stack

direction="row"

spacing={3}

alignItems="center"

>


<Avatar

sx={{

width:80,

height:80,

fontSize:32,

bgcolor:"#1565C0"

}}

>

A

</Avatar>



<div>

<Typography

variant="h5"

fontWeight="bold"

>

Welcome Admin 👋

</Typography>


<Typography>

CivicAI System Administrator

</Typography>


<Typography

color="text.secondary"

>

Manage citizens, officers and departments

</Typography>


</div>


</Stack>


</Paper>

)

}


export default AdminWelcomeCard;