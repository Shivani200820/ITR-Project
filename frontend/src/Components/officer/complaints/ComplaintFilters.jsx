import {
Grid,
TextField,
MenuItem
}
from "@mui/material";


function ComplaintFilters(){


return(

<Grid container spacing={2} mb={3}>


<Grid item xs={12} md={4}>

<TextField

fullWidth

label="Search Complaint"

/>

</Grid>



<Grid item xs={12} md={4}>


<TextField

select

fullWidth

label="Status"

defaultValue="All"

>


<MenuItem value="All">
All
</MenuItem>


<MenuItem value="Pending">
Pending
</MenuItem>


<MenuItem value="Resolved">
Resolved
</MenuItem>


</TextField>


</Grid>



<Grid item xs={12} md={4}>


<TextField

select

fullWidth

label="Priority"

defaultValue="All"

>


<MenuItem value="All">
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


export default ComplaintFilters;