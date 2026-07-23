import {

Typography,

Paper

}

from "@mui/material";


import HeatmapFilters from "../../components/admin/heatmap/HeatmapFilters";

import ComplaintMap from "../../components/admin/heatmap/ComplaintMap";

import HeatmapLegend from "../../components/admin/heatmap/HeatmapLegend";



function ComplaintHeatmap(){


return(

<>


<Typography

variant="h4"

fontWeight="bold"

mb={3}

>

Complaint Heatmap

</Typography>



<Paper

sx={{

p:3,

mb:3,

borderRadius:4

}}

>


<HeatmapFilters/>


</Paper>



<Paper

sx={{

p:2,

borderRadius:4

}}

>


<ComplaintMap/>


</Paper>



<HeatmapLegend/>


</>

)

}


export default ComplaintHeatmap;