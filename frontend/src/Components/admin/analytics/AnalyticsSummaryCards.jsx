import Grid from "@mui/material/Grid";

import AnalyticsCard from "./AnalyticsCard";


function AnalyticsSummaryCards(){


return(

<Grid container spacing={3}>


<Grid item xs={12} md={3}>

<AnalyticsCard

title="Total Complaints"

value="3240"

/>

</Grid>


<Grid item xs={12} md={3}>

<AnalyticsCard

title="Pending"

value="260"

/>

</Grid>


<Grid item xs={12} md={3}>

<AnalyticsCard

title="Resolved"

value="2980"

/>

</Grid>


<Grid item xs={12} md={3}>

<AnalyticsCard

title="Success Rate"

value="92%"

/>

</Grid>


</Grid>

)

}


export default AnalyticsSummaryCards;