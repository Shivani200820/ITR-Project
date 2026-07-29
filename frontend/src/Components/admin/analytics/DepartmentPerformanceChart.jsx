import {

Chart as ChartJS,

BarElement,

CategoryScale,

LinearScale,

Tooltip,

Legend

}

from "chart.js";


import {Bar}

from "react-chartjs-2";


import {
Paper,
Typography
}
from "@mui/material";


ChartJS.register(

BarElement,

CategoryScale,

LinearScale,

Tooltip,

Legend

);



function DepartmentPerformanceChart(){


const data={


labels:[

"Road",

"Water",

"Garbage",

"Electricity"

],


datasets:[

{

label:"Resolved Complaints",

data:[
90,
75,
85,
70
],


borderWidth:2

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

Department Performance

</Typography>


<Bar data={data}/>


</Paper>

)

}


export default DepartmentPerformanceChart;