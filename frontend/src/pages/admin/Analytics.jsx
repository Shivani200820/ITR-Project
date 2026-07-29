import {

Container,

Grid,

Typography

}

from "@mui/material";


import ReportCards

from "../../components/admin/analytics/ReportCards";


import ComplaintGrowthChart

from "../../components/admin/analytics/ComplaintGrowthChart";


import DepartmentPerformanceChart

from "../../components/admin/analytics/DepartmentPerformanceChart";


import CategoryPieChart

from "../../components/admin/analytics/CategoryPieChart";


import ExportReport

from "../../components/admin/analytics/ExportReport";



function Analytics(){


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

Admin Analytics & Reports

</Typography>



<ReportCards/>



<Grid

container

spacing={3}

mt={1}

>


<Grid item xs={12} md={8}>

<ComplaintGrowthChart/>

</Grid>



<Grid item xs={12} md={4}>

<CategoryPieChart/>

</Grid>



<Grid item xs={12}>

<DepartmentPerformanceChart/>

</Grid>


</Grid>



<ExportReport/>


</Container>

)

}


export default Analytics;