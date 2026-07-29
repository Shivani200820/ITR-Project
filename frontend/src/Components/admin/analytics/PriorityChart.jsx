import {

BarChart,

Bar,

XAxis,

YAxis,

Tooltip,

ResponsiveContainer

}

from "recharts";


const data=[

{
priority:"High",
count:900
},

{
priority:"Medium",
count:1500
},

{
priority:"Low",
count:840
}

];


function PriorityChart(){


return(

<ResponsiveContainer

width="100%"

height={300}

>


<BarChart data={data}>


<XAxis dataKey="priority"/>


<YAxis/>


<Tooltip/>


<Bar

dataKey="count"

fill="#2563EB"

/>


</BarChart>


</ResponsiveContainer>

)

}


export default PriorityChart;