import {

Chart as ChartJS,

CategoryScale,

LinearScale,

PointElement,

LineElement,

Tooltip,

Legend

}

from "chart.js";


import {Line}

from "react-chartjs-2";


import {
Paper,
Typography
}
from "@mui/material";


ChartJS.register(

CategoryScale,

LinearScale,

PointElement,

LineElement,

Tooltip,

Legend

);



function ComplaintGrowthChart(){


const data={

labels:[
"Jan",
"Feb",
"Mar",
"Apr",
"May"
],


datasets:[

{

label:"Complaints",

data:[
200,
350,
280,
500,
700
],

borderWidth:3

}

]

};


return(

<Paper

sx={{
p:3,
borderRadius:4
}}

>


<Typography
variant="h6"
fontWeight="bold"
mb={2}
>

Complaint Growth

</Typography>


<Line data={data}/>


</Paper>

)

}


export default ComplaintGrowthChart;