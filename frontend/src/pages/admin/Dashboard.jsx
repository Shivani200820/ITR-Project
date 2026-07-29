import {

Container,

Grid,

Typography

}

from "@mui/material";


import AdminWelcomeCard

from "../../components/admin/dashboard/AdminWelcomeCard";


import AdminSummaryCards

from "../../components/admin/dashboard/AdminSummaryCards";


import QuickStats

from "../../components/admin/dashboard/QuickStats";



function Dashboard(){


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

Admin Dashboard

</Typography>



<AdminWelcomeCard/>



<Grid

container

spacing={3}

mt={1}

>


<Grid

item

xs={12}

>

<AdminSummaryCards/>

</Grid>



<Grid

item

xs={12}

>

<QuickStats/>

</Grid>



</Grid>



</Container>

)

}


export default Dashboard;