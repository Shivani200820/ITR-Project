import {
  Box,
  Typography,
  Paper,
  Button,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import DepartmentFilters from "../../components/admin/departments/DepartmentFilters";
import DepartmentTable from "../../components/admin/departments/DepartmentTable";


function DepartmentManagement(){

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

Department Management

</Typography>



<Button

variant="contained"

startIcon={<AddIcon/>}

>

Add Department

</Button>


</Box>



<Paper

sx={{

p:3,

mb:3,

borderRadius:4

}}

>


<DepartmentFilters/>


</Paper>



<Paper

sx={{

borderRadius:4,

overflow:"hidden"

}}

>


<DepartmentTable/>


</Paper>



</Box>

)

}


export default DepartmentManagement;