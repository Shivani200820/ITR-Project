import {

Typography,

Paper

}

from "@mui/material";


function AdminDashboard(){


return (

<>

<Typography

variant="h4"

fontWeight="bold"

>

Welcome Admin 👨‍💼

</Typography>



<Paper

sx={{

mt:3,

p:5,

borderRadius:4

}}

>


<Typography>

Admin Control Center

</Typography>


</Paper>


</>

)

}


export default AdminDashboard;