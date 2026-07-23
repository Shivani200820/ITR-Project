import {

Grid,

TextField,

MenuItem

}

from "@mui/material";


function OfficerFilters(){


return(

<Grid container spacing={2}>


<Grid item xs={12} md={6}>

<TextField

fullWidth

label="Search Officer"

/>

</Grid>



<Grid item xs={12} md={3}>


<TextField

select

fullWidth

label="Department"

defaultValue=""

>


<MenuItem value="">

All

</MenuItem>


<MenuItem value="Road">

Road Department

</MenuItem>


<MenuItem value="Water">

Water Supply

</MenuItem>


<MenuItem value="Garbage">

Garbage Management

</MenuItem>


</TextField>


</Grid>



<Grid item xs={12} md={3}>


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


<MenuItem value="Blocked">

Blocked

</MenuItem>


</TextField>


</Grid>



</Grid>

)

}


export default OfficerFilters;