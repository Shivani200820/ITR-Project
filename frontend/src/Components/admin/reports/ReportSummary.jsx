import {
Grid,
Card,
CardContent,
Typography
}
from "@mui/material";


function ReportSummary(){

const data=[

["Total Complaints","3240"],

["Resolved","2980"],

["Pending","260"],

["Success Rate","92%"]

];


return(

<Grid container spacing={3}>


{

data.map((item)=>(


<Grid item xs={12} md={3}

key={item[0]}

>


<Card

sx={{borderRadius:4}}

>


<CardContent>


<Typography color="text.secondary">

{item[0]}

</Typography>


<Typography

variant="h4"

fontWeight="bold"

>

{item[1]}

</Typography>


</CardContent>


</Card>


</Grid>


))

}


</Grid>

)

}


export default ReportSummary;