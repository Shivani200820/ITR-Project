import {
Container,
Typography,
Button,
Paper
}
from "@mui/material";


import {useState} from "react";


import FeedbackDialog 
from "../../components/citizen/feedback/FeedbackDialog";


import FeedbackList
from "../../components/citizen/feedback/FeedbackList";



function Feedback(){


const [open,setOpen]=useState(false);



return(

<Container

maxWidth="md"

sx={{

py:4

}}

>


<Typography

variant="h4"

fontWeight="bold"

mb={3}

>

Complaint Feedback

</Typography>



<Paper

sx={{

p:3,

borderRadius:4

}}

>


<Button

variant="contained"

onClick={()=>setOpen(true)}

>

Give Rating ⭐

</Button>



</Paper>



<Paper

sx={{

p:3,

mt:3,

borderRadius:4

}}

>


<FeedbackList/>


</Paper>




<FeedbackDialog

open={open}

handleClose={()=>setOpen(false)}

/>



</Container>

)

}


export default Feedback;