import Grid from "@mui/material/Grid";

import {
  Card,
  CardContent,
  Typography
} from "@mui/material";


const reports = [

{
 title:"Total Complaints",
 value:"5400"
},

{
 title:"Resolved",
 value:"4200"
},

{
 title:"Pending",
 value:"800"
},

{
 title:"Success Rate",
 value:"94%"
}

];


function ReportCards(){

return(

<Grid container spacing={3}>

{
reports.map((item)=>(

<Grid
item
xs={12}
sm={6}
md={3}
key={item.title}
>


<Card

sx={{
borderRadius:4
}}

>

<CardContent>

<Typography
color="text.secondary"
>
{item.title}
</Typography>


<Typography

variant="h3"

fontWeight="bold"

mt={2}

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


export default ReportCards;