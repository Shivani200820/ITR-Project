import {
Timeline,
TimelineItem,
TimelineSeparator,
TimelineConnector,
TimelineContent,
TimelineDot
}
from "@mui/lab";


import {
Typography
}
from "@mui/material";



function ComplaintTimeline(){


return(

<Timeline>


<TimelineItem>

<TimelineSeparator>

<TimelineDot/>

<TimelineConnector/>

</TimelineSeparator>


<TimelineContent>

<Typography fontWeight="bold">

Complaint Submitted

</Typography>


<Typography color="text.secondary">

26 July 2026

</Typography>


</TimelineContent>


</TimelineItem>




<TimelineItem>

<TimelineSeparator>

<TimelineDot color="warning"/>

</TimelineSeparator>


<TimelineContent>

<Typography fontWeight="bold">

Assigned To Officer

</Typography>


<Typography color="text.secondary">

Today

</Typography>


</TimelineContent>


</TimelineItem>



</Timeline>

)

}


export default ComplaintTimeline;