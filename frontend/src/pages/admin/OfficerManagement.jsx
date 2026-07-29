import {
  Box,
  Typography,
  Paper,
  Button,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import OfficerFilters from "../../components/admin/officers/OfficerFilters";
import OfficerTable from "../../components/admin/officers/OfficerTable";


function OfficerManagement(){

return(

<Box>


<Box

display="flex"

justifyContent="space-between"

alignItems="center"

mb={3}

>


<Typography

variant="h4"

fontWeight="bold"

>

Officer Management

</Typography>


<Button

variant="contained"

startIcon={<AddIcon/>}

>

Add Officer

</Button>


</Box>



<Paper

sx={{

p:3,

mb:3,

borderRadius:4

}}

>


<OfficerFilters/>


</Paper>



<Paper

sx={{

borderRadius:4,

overflow:"hidden"

}}

>


<OfficerTable/>


</Paper>



</Box>

)

}


export default OfficerManagement;