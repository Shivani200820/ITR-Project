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
department:"Road",
rate:90
},

{
department:"Water",
rate:85
},

{
department:"Garbage",
rate:95
}

];


function DepartmentPerformanceChart(){


return(

<ResponsiveContainer

width="100%"

height={300}

>


<BarChart data={data}>


<XAxis dataKey="department"/>


<YAxis/>


<Tooltip/>


<Bar

dataKey="rate"

fill="#10B981"

/>


</BarChart>


</ResponsiveContainer>

)

}


export default DepartmentPerformanceChart;