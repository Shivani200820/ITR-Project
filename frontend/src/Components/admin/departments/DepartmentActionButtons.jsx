import {
Stack,
IconButton
}
from "@mui/material";


import VisibilityIcon from "@mui/icons-material/Visibility";

import EditIcon from "@mui/icons-material/Edit";

import DeleteIcon from "@mui/icons-material/Delete";


function DepartmentActionButtons(){


return(

<Stack direction="row">


<IconButton color="primary">

<VisibilityIcon/>

</IconButton>


<IconButton color="warning">

<EditIcon/>

</IconButton>


<IconButton color="error">

<DeleteIcon/>

</IconButton>


</Stack>

)

}


export default DepartmentActionButtons;