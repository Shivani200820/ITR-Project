import Grid from "@mui/material/Grid";

import {
Card,
CardContent,
Typography
}
from "@mui/material";


const data=[

{
title:"Total Citizens",
value:"1250",
icon:"👥"
},

{
title:"Total Officers",
value:"85",
icon:"👮"
},

{
title:"Departments",
value:"20",
icon:"🏢"
},

{
title:"Total Complaints",
value:"5400",
icon:"📋"
}

];



function AdminSummaryCards(){


return(

<Grid container spacing={3}>


{

data.map((item)=>(


<Grid

item

xs={12}

sm={6}

md={3}

key={item.title}

>


<Card

sx={{

borderRadius:4,

height:"100%"

}}

>


<CardContent>


<Typography

fontSize={35}

>

{item.icon}

</Typography>


<Typography

color="text.secondary"

>

{item.title}

</Typography>



<Typography

variant="h3"

fontWeight="bold"

mt={1}

>

{item.value}

</Typography>


</CardContent>


</Card>


</Grid>


))

}



</Grid>

)

}


export default AdminSummaryCards;