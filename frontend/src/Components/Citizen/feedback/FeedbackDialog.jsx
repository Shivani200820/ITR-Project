import {
Dialog,
DialogTitle,
DialogContent,
DialogActions,
Button,
TextField,
Typography
}
from "@mui/material";


import {useState} from "react";

import RatingStars from "./RatingStars";



function FeedbackDialog({open,handleClose}){


const [rating,setRating]=useState(0);

const [comment,setComment]=useState("");



const submitFeedback=()=>{


console.log({

rating,

comment

});


handleClose();


};



return(

<Dialog

open={open}

onClose={handleClose}

fullWidth

>


<DialogTitle>

Rate Complaint Resolution

</DialogTitle>



<DialogContent>


<Typography mt={2}>

How satisfied are you?

</Typography>



<RatingStars

value={rating}

setValue={setRating}

/>



<TextField


fullWidth

multiline

rows={4}

label="Write your feedback"

sx={{

mt:3

}}

value={comment}

onChange={(e)=>

setComment(e.target.value)

}

/>



</DialogContent>



<DialogActions>


<Button

onClick={handleClose}

>

Cancel

</Button>



<Button

variant="contained"

onClick={submitFeedback}

>

Submit

</Button>



</DialogActions>


</Dialog>

)

}


export default FeedbackDialog;