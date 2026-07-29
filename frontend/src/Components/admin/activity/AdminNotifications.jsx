import {

Paper,

Typography,

List,

ListItem,

ListItemText,

Chip

}

from "@mui/material";


const notifications=[

{
title:"High Priority Complaint",
message:"50 urgent complaints received"
},

{
title:"AI Alert",
message:"Detection accuracy updated"
},

{
title:"System Update",
message:"New features deployed"
}

];


function AdminNotifications(){


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

🔔 Notifications

</Typography>



<List>


{

notifications.map((item,index)=>(


<ListItem

key={index}

divider

>


<ListItemText

primary={item.title}

secondary={item.message}

/>


<Chip

label="New"

color="error"

size="small"

/>


</ListItem>


))


}


</List>


</Paper>

)

}


export default AdminNotifications;