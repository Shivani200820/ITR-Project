import {

Grid,

TextField,

MenuItem

}

from "@mui/material";


function HeatmapFilters(){


return(

<Grid container spacing={2}>


<Grid item xs={12} md={4}>


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


</TextField>


</Grid>



<Grid item xs={12} md={4}>


<TextField

select

fullWidth

label="Priority"

defaultValue=""

>


<MenuItem value="">

All

</MenuItem>


<MenuItem value="High">

High

</MenuItem>


<MenuItem value="Medium">

Medium

</MenuItem>


<MenuItem value="Low">

Low

</MenuItem>


</TextField>


</Grid>



</Grid>

)

}


export default HeatmapFilters;