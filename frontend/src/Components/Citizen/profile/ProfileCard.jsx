import {
  Paper,
  Avatar,
  Typography,
  Stack,
  Button
}
from "@mui/material";


import EditIcon from "@mui/icons-material/Edit";


function ProfileCard({onEdit}){


return(

<Paper

sx={{

p:4,

borderRadius:4,

textAlign:"center"

}}

>


<Avatar

sx={{

width:100,

height:100,

margin:"auto",

fontSize:40

}}

>

G

</Avatar>



<Typography

variant="h5"

fontWeight="bold"

mt={2}

>

Gauri Chikhale

</Typography>



<Typography

color="text.secondary"

>

gauri@gmail.com

</Typography>



<Typography

color="text.secondary"

>

Citizen

</Typography>



<Button

variant="contained"

startIcon={<EditIcon/>}

sx={{mt:3}}

onClick={onEdit}

>

Edit Profile

</Button>



</Paper>

)

}


export default ProfileCard;