import {

Container,

Grid,

Typography

}

from "@mui/material";


import AIModelCard

from "../../components/admin/settings/AIModelCard";


import AIMetrics

from "../../components/admin/settings/AIMetrics";


import SystemSettings

from "../../components/admin/settings/SystemSettings";


import SecuritySettings

from "../../components/admin/settings/SecuritySettings";



function Settings(){


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

Admin Settings

</Typography>



<Grid container spacing={3}>


<Grid item xs={12} md={6}>

<AIModelCard/>

</Grid>



<Grid item xs={12} md={6}>

<AIMetrics/>

</Grid>



<Grid item xs={12} md={6}>

<SystemSettings/>

</Grid>



<Grid item xs={12} md={6}>

<SecuritySettings/>

</Grid>



</Grid>


</Container>

)

}


export default Settings;