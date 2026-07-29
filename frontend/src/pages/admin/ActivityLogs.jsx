import {

Container,

Grid,

Typography

}

from "@mui/material";


import AdminNotifications

from "../../components/admin/activity/AdminNotifications";


import ActivityTimeline

from "../../components/admin/activity/ActivityTimeline";


import ActivityTable

from "../../components/admin/activity/ActivityTable";



function ActivityLogs(){


return(

<Container

maxWidth="xl"

sx={{py:4}}

>


<Typography

variant="h4"

fontWeight="bold"

mb={3}

>

Admin Activity Center

</Typography>



<Grid container spacing={3}>


<Grid item xs={12} md={5}>

<AdminNotifications/>

</Grid>



<Grid item xs={12} md={7}>

<ActivityTimeline/>

</Grid>



<Grid item xs={12}>

<ActivityTable/>

</Grid>



</Grid>


</Container>

)

}


export default ActivityLogs;