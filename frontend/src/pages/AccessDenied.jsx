import {
  Box,
  Button,
  Container,
  Typography
} from "@mui/material";


import BlockIcon from "@mui/icons-material/Block";

import { Link } from "react-router-dom";


function AccessDenied(){

return(

<Container maxWidth="md">

<Box

sx={{

minHeight:"80vh",

display:"flex",

flexDirection:"column",

justifyContent:"center",

alignItems:"center",

textAlign:"center"

}}

>


<BlockIcon

sx={{

fontSize:100,

color:"error.main"

}}

/>



<Typography

variant="h2"

fontWeight="bold"

mt={2}

>

403

</Typography>



<Typography

variant="h4"

fontWeight="bold"

mt={2}

>

Access Denied

</Typography>



<Typography

color="text.secondary"

mt={2}

mb={4}

>

You don't have permission to access this page.

Please contact administrator.

</Typography>



<Button

component={Link}

to="/"

variant="contained"

size="large"

>

Back To Home

</Button>


</Box>


</Container>

)

}


export default AccessDenied;