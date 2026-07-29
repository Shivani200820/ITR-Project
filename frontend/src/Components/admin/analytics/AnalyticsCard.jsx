import {
Card,
CardContent,
Typography
}
from "@mui/material";


function AnalyticsCard({title,value}){


return(

<Card

sx={{

borderRadius:4,

height:"100%"

}}

>


<CardContent>


<Typography

color="text.secondary"

>

{title}

</Typography>


<Typography

variant="h4"

fontWeight="bold"

mt={1}

>

{value}

</Typography>


</CardContent>


</Card>

)

}


export default AnalyticsCard;