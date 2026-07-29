import {

Paper,

Typography,

LinearProgress,

Stack

}

from "@mui/material";


function AIMetrics(){


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

AI Performance Metrics

</Typography>



<Stack spacing={3}>


<div>

<Typography>
Image Detection Accuracy - 96%
</Typography>


<LinearProgress

variant="determinate"

value={96}

/>

</div>



<div>

<Typography>
Priority Prediction - 91%
</Typography>


<LinearProgress

variant="determinate"

value={91}

/>

</div>



<div>

<Typography>
Duplicate Detection - 88%
</Typography>


<LinearProgress

variant="determinate"

value={88}

/>

</div>



</Stack>


</Paper>

)

}


export default AIMetrics;