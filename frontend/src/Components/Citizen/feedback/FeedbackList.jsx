import {
Paper,
Typography
}
from "@mui/material";


function FeedbackList(){


const feedback=[

{

name:"You",

rating:5,

comment:"Issue resolved quickly"

}

];


return(

<>

<Typography

variant="h6"

fontWeight="bold"

mb={2}

>

Previous Feedback

</Typography>



{

feedback.map((item,index)=>(


<Paper

key={index}

sx={{

p:2,

mb:2,

borderRadius:3

}}

>


<Typography>

⭐ {item.rating}/5

</Typography>


<Typography

color="text.secondary"

>

{item.comment}

</Typography>



</Paper>


))

}



</>

)

}


export default FeedbackList;