import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
  Stack
} from "@mui/material";


import CheckCircleIcon from "@mui/icons-material/CheckCircle";


import { Link } from "react-router-dom";


import { motion } from "framer-motion";



function ComplaintSuccess(){

return(

<Container maxWidth="sm">


<Box

sx={{

minHeight:"80vh",

display:"flex",

justifyContent:"center",

alignItems:"center"

}}

>


<motion.div

initial={{

scale:0.5,

opacity:0

}}

animate={{

scale:1,

opacity:1

}}

transition={{

duration:0.5

}}

>


<Paper

sx={{

p:5,

textAlign:"center",

borderRadius:5

}}

>


<CheckCircleIcon

sx={{

fontSize:90,

color:"success.main"

}}

/>



<Typography

variant="h4"

fontWeight="bold"

mt={3}

>

Complaint Submitted Successfully 🎉

</Typography>



<Typography

color="text.secondary"

mt={2}

>

Your complaint has been received and sent
to the concerned department.

</Typography>




<Box

sx={{

mt:3,

p:2,

background:"#F1F8E9",

borderRadius:3

}}

>


<Typography>

Complaint ID

</Typography>


<Typography

variant="h5"

fontWeight="bold"

color="primary"

>

CIVIC-10245

</Typography>


</Box>





<Stack

spacing={2}

mt={4}

>


<Button

variant="contained"

component={Link}

to="/citizen/complaints"

>

Track Complaint

</Button>




<Button

variant="outlined"

component={Link}

to="/citizen/dashboard"

>

Go To Dashboard

</Button>



</Stack>



</Paper>


</motion.div>


</Box>


</Container>


)

}


export default ComplaintSuccess;