import {

Container,

Typography

}

from "@mui/material";


import ComplaintFilters 
from "../../components/officer/complaints/ComplaintFilters";


import ComplaintTable 
from "../../components/officer/complaints/ComplaintTable";



function Complaints(){


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

Manage Complaints

</Typography>



<ComplaintFilters/>


<ComplaintTable/>


</Container>

)

}


export default Complaints;