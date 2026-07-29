import {
Paper,
Typography,
LinearProgress,
Stack
}
from "@mui/material";


function PerformanceCard(){

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

>

Performance Score

</Typography>



<Stack mt={3} spacing={2}>


<Typography>

Resolution Rate : 92%

</Typography>


<LinearProgress

variant="determinate"

value={92}

/>



<Typography>

Average Response Time : 2 Hours

</Typography>


</Stack>


</Paper>

)

}


export default PerformanceCard;