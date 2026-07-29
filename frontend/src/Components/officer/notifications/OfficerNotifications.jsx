import {

Paper,

Typography,

List,

ListItem,

ListItemText,

Badge

}

from "@mui/material";


import notifications from "./notificationData";


function OfficerNotifications(){


return(

<Paper

sx={{

p:3,

borderRadius:4

}}

>


<Typography

variant="h6"

fontWeight="bold"

mb={2}

>

Notifications 🔔

</Typography>



<List>

{

notifications.map((item)=>(


<ListItem

key={item.id}

divider

>


<ListItemText


primary={item.title}


secondary={

`${item.message} • ${item.time}`

}


/>


</ListItem>


))

}


</List>



</Paper>

)

}


export default OfficerNotifications;