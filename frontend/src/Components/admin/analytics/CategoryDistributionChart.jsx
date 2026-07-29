import {

PieChart,

Pie,

Tooltip,

ResponsiveContainer

}

from "recharts";


const data=[

{
name:"Road",
value:40
},

{
name:"Garbage",
value:25
},

{
name:"Water",
value:20
},

{
name:"Electricity",
value:15
}

];


function CategoryDistributionChart(){


return(

<ResponsiveContainer

width="100%"

height={300}

>


<PieChart>


<Pie

data={data}

dataKey="value"

outerRadius={100}

/>


<Tooltip/>


</PieChart>


</ResponsiveContainer>

)

}


export default CategoryDistributionChart;