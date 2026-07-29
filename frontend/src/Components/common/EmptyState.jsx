import {
  Box,
  Button,
  Typography,
} from "@mui/material";


import InboxIcon from "@mui/icons-material/Inbox";


function EmptyState({

  title="No Data Found",

  message="There is no information available right now.",

  buttonText,

  onClick

}) {


return (

<Box

sx={{

minHeight:"300px",

display:"flex",

flexDirection:"column",

justifyContent:"center",

alignItems:"center",

textAlign:"center",

p:4

}}

>


<Box

sx={{

width:90,

height:90,

borderRadius:"50%",

background:"#E3F2FD",

display:"flex",

alignItems:"center",

justifyContent:"center",

mb:3

}}

>

<InboxIcon

sx={{

fontSize:45,

color:"primary.main"

}}

/>


</Box>



<Typography

variant="h5"

fontWeight="bold"

>

{title}

</Typography>



<Typography

color="text.secondary"

mt={1}

mb={3}

>

{message}

</Typography>




{

buttonText &&

<Button

variant="contained"

onClick={onClick}

>

{buttonText}

</Button>

}



</Box>

)

}


export default EmptyState;