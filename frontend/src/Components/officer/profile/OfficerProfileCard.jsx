import {
  Paper,
  Avatar,
  Typography,
  Stack,
  Divider
} from "@mui/material";


function OfficerProfileCard(){

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

width:90,

height:90,

fontSize:35

}}

>

R

</Avatar>



<div>

<Typography

variant="h5"

fontWeight="bold"

>

Rahul Sharma

</Typography>


<Typography>

Road Department Officer

</Typography>


<Typography

color="text.secondary"

>

Pune Municipal Corporation

</Typography>


</div>


</Stack>



<Divider sx={{my:3}} />



<Typography>

📍 Assigned Area : MG Road, Shivaji Nagar

</Typography>


<Typography mt={1}>

📅 Experience : 5 Years

</Typography>


<Typography mt={1}>

📧 rahul@example.com

</Typography>



</Paper>

)

}


export default OfficerProfileCard;