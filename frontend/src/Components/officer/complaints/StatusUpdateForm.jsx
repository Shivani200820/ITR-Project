import {
TextField,
MenuItem,
Stack
}
from "@mui/material";

import ResolutionUpload from "./ResolutionUpload";


function StatusUpdateForm(){

return(

<Stack spacing={3} mt={2}>


<TextField

select

label="Update Status"

defaultValue="In Progress"

>

<MenuItem value="Pending">
Pending
</MenuItem>


<MenuItem value="In Progress">
In Progress
</MenuItem>


<MenuItem value="Resolved">
Resolved
</MenuItem>


</TextField>



<TextField

label="Officer Note"

multiline

rows={4}

placeholder="Write resolution details..."

/>



<ResolutionUpload/>


</Stack>

)

}


export default StatusUpdateForm;