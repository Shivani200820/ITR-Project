import {

AppBar,

Toolbar,

Typography,

Box,

IconButton

}

from "@mui/material";


import NotificationsIcon from "@mui/icons-material/Notifications";


function AdminNavbar(){


return (

<AppBar

position="fixed"

sx={{

background:"#fff",

color:"#111",

ml:"260px",

width:"calc(100% - 260px)"

}}

>


<Toolbar>


<Typography

variant="h6"

fontWeight="bold"

>

Admin Dashboard

</Typography>


<Box flexGrow={1}/>


<IconButton>

<NotificationsIcon/>

</IconButton>


<Typography

ml={2}

fontWeight="bold"

>

Admin

</Typography>


</Toolbar>


</AppBar>

)

}


export default AdminNavbar;