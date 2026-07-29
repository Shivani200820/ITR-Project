import {

Container,

Grid,

Typography

}

from "@mui/material";


import OfficerProfileCard

from "../../components/officer/profile/OfficerProfileCard";


import PerformanceCard

from "../../components/officer/profile/PerformanceCard";


import OfficerNotifications

from "../../components/officer/notifications/OfficerNotifications";



function Profile(){


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

Officer Profile

</Typography>



<Grid container spacing={3}>


<Grid item xs={12} md={6}>

<OfficerProfileCard/>

</Grid>



<Grid item xs={12} md={6}>

<PerformanceCard/>

</Grid>



<Grid item xs={12}>

<OfficerNotifications/>

</Grid>



</Grid>



</Container>

)

}


export default Profile;