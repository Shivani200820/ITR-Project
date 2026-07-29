import {

Container,

Typography,

Paper

}

from "@mui/material";


import NotificationList 
from "../../components/citizen/notifications/NotificationList";



function Notifications(){


return(

<Container

maxWidth="md"

sx={{

py:4

}}

>


<Typography

variant="h4"

fontWeight="bold"

mb={3}

>

Notifications 🔔

</Typography>



<Paper

sx={{

p:3,

borderRadius:4

}}

>


<NotificationList/>


</Paper>



</Container>

)

}


export default Notifications;