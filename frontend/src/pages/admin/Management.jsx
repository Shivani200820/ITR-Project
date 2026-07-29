import {

Container,
Typography,
Grid

}
from "@mui/material";


import SearchFilter

from "../../components/admin/management/SearchFilter";


import CitizenTable

from "../../components/admin/management/CitizenTable";


import OfficerTable

from "../../components/admin/management/OfficerTable";


import DepartmentTable

from "../../components/admin/management/DepartmentTable";



function Management(){


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

Management

</Typography>


<SearchFilter/>



<Grid container spacing={3}>


<Grid item xs={12}>

<CitizenTable/>

</Grid>


<Grid item xs={12}>

<OfficerTable/>

</Grid>


<Grid item xs={12}>

<DepartmentTable/>

</Grid>



</Grid>



</Container>

)

}


export default Management;