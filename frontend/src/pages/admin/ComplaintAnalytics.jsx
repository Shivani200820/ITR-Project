import {

Grid,

Paper,

Typography

}

from "@mui/material";


import AnalyticsSummaryCards from "../../components/admin/analytics/AnalyticsSummaryCards";

import MonthlyComplaintChart from "../../components/admin/analytics/MonthlyComplaintChart";

import CategoryDistributionChart from "../../components/admin/analytics/CategoryDistributionChart";

import PriorityChart from "../../components/admin/analytics/PriorityChart";

import DepartmentPerformanceChart from "../../components/admin/analytics/DepartmentPerformanceChart";



function ComplaintAnalytics(){


return(

<>


<Typography

variant="h4"

fontWeight="bold"

mb={3}

>

Complaint Analytics

</Typography>



<AnalyticsSummaryCards/>




<Grid container spacing={3} mt={2}>


<Grid item xs={12} md={8}>

<Paper sx={{p:3,borderRadius:4}}>

<MonthlyComplaintChart/>

</Paper>

</Grid>



<Grid item xs={12} md={4}>

<Paper sx={{p:3,borderRadius:4}}>

<CategoryDistributionChart/>

</Paper>

</Grid>


<Grid item xs={12} md={6}>

<Paper sx={{p:3,borderRadius:4}}>

<PriorityChart/>

</Paper>

</Grid>



<Grid item xs={12} md={6}>

<Paper sx={{p:3,borderRadius:4}}>

<DepartmentPerformanceChart/>

</Paper>

</Grid>



</Grid>


</>

)

}


export default ComplaintAnalytics;