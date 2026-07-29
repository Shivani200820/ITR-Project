import {
Paper,
Typography,
Stack
}
from "@mui/material";


function HeatmapLegend(){


return(

<Paper

sx={{

p:2,

mt:2,

borderRadius:3

}}

>


<Typography

fontWeight="bold"

>

Priority Legend

</Typography>


<Stack spacing={1} mt={1}>


<Typography>
🔴 High Priority
</Typography>


<Typography>
🟡 Medium Priority
</Typography>


<Typography>
🟢 Low Priority
</Typography>


</Stack>


</Paper>

)

}


export default HeatmapLegend;