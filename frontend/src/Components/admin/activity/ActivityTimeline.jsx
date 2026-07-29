import {

Timeline,

TimelineItem,

TimelineSeparator,

TimelineDot,

TimelineContent

}

from "@mui/lab";


import {

Typography

}

from "@mui/material";


import activities from "./activityData";


function ActivityTimeline(){


return(

<Timeline>


{

activities.map((item)=>(


<TimelineItem key={item.id}>


<TimelineSeparator>

<TimelineDot/>

</TimelineSeparator>



<TimelineContent>


<Typography

fontWeight="bold"

>

{item.title}

</Typography>


<Typography

color="text.secondary"

>

{item.user} • {item.time}

</Typography>


</TimelineContent>



</TimelineItem>


))


}


</Timeline>

)

}


export default ActivityTimeline;