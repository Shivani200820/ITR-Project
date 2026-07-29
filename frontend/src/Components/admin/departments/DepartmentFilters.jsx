import {
Grid,
TextField,
MenuItem
}
from "@mui/material";


function DepartmentFilters(){


return(

<Grid container spacing={2}>


<Grid item xs={12} md={8}>

<TextField

fullWidth

label="Search Department"

/>

</Grid>



<Grid item xs={12} md={4}>


<TextField

select

fullWidth

label="Status"

defaultValue=""

>


<MenuItem value="">

All

</MenuItem>


<MenuItem value="Active">

Active

</MenuItem>


<MenuItem value="Inactive">

Inactive

</MenuItem>


</TextField>


</Grid>


</Grid>

)

}


export default DepartmentFilters;