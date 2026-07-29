import {
Paper,
Typography
}
from "@mui/material";


function ComplaintImagePreview(){


return(

<Paper

sx={{

p:2,

borderRadius:3

}}

>


<img

src="https://picsum.photos/400/300"

alt="complaint"

style={{

width:"100%",

borderRadius:"12px"

}}

/>



<Typography

mt={2}

fontWeight="bold"

>

Complaint Image

</Typography>



</Paper>

)

}


export default ComplaintImagePreview;