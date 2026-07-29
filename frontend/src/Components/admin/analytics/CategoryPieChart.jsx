import {

Chart as ChartJS,

ArcElement,

Tooltip,

Legend

}

from "chart.js";


import {Pie}

from "react-chartjs-2";


import {
Paper,
Typography
}
from "@mui/material";


ChartJS.register(

ArcElement,

Tooltip,

Legend

);



function CategoryPieChart(){


const data={

labels:[

"Road",

"Garbage",

"Water",

"Street Light"

],


datasets:[

{

data:[
40,
25,
20,
15
]

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

Complaint Categories

</Typography>


<Pie data={data}/>


</Paper>

)

}


export default CategoryPieChart;