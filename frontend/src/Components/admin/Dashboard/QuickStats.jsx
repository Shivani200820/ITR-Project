import {
Paper,
Typography,
Stack
}
from "@mui/material";


function QuickStats(){


return(

<Paper

sx={{

p:4,

borderRadius:4

}}

>


<Typography

variant="h6"

fontWeight="bold"

mb={3}

>

System Overview

</Typography>



<Stack spacing={2}>


<Typography>

✅ Resolved Complaints : 4200

</Typography>



<Typography>

⏳ Pending Complaints : 800

</Typography>



<Typography>

⚡ Average Resolution Time : 2.5 Days

</Typography>



<Typography>

⭐ Citizen Satisfaction : 94%

</Typography>


</Stack>


</Paper>

)

}


export default QuickStats;