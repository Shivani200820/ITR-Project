import {
  Box,
  Typography,
  Paper
} from "@mui/material";


import ReportFilters from "../../components/admin/reports/ReportFilters";

import ReportSummary from "../../components/admin/reports/ReportSummary";

import ReportTable from "../../components/admin/reports/ReportTable";

import ExportButtons from "../../components/admin/reports/ExportButtons";


function Reports(){

return(

<Box>


<Typography

variant="h4"

fontWeight="bold"

mb={3}

>

Reports & Export

</Typography>



<Paper

sx={{

p:3,

mb:3,

borderRadius:4

}}

>


<ReportFilters/>


</Paper>



<ReportSummary/>



<Paper

sx={{

mt:3,

borderRadius:4,

overflow:"hidden"

}}

>


<ReportTable/>


</Paper>



<ExportButtons/>


</Box>

)

}


export default Reports;