import {
Grid,
TextField,
MenuItem,
Button
}
from "@mui/material";


function ReportFilters(){

return(

<Grid container spacing={2}>


<Grid item xs={12} md={3}>

<TextField

fullWidth

type="date"

label="Start Date"

InputLabelProps={{
shrink:true
}}

/>

</Grid>



<Grid item xs={12} md={3}>

<TextField

fullWidth

type="date"

label="End Date"

InputLabelProps={{
shrink:true
}}

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


</TextField>


</Grid>



<Grid item xs={12} md={3}>


<Button

variant="contained"

fullWidth

sx={{height:"56px"}}

>

Generate Report

</Button>


</Grid>


</Grid>

)

}


export default ReportFilters;