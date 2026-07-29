import {

LineChart,

Line,

XAxis,

YAxis,

Tooltip,

CartesianGrid,

ResponsiveContainer

}

from "recharts";


const data=[

{
month:"Jan",
complaints:300
},

{
month:"Feb",
complaints:420
},

{
month:"Mar",
complaints:380
},

{
month:"Apr",
complaints:520
},

{
month:"May",
complaints:600
}

];


function MonthlyComplaintChart(){


return(

<ResponsiveContainer

width="100%"

height={300}

>


<LineChart data={data}>


<CartesianGrid strokeDasharray="3 3"/>


<XAxis dataKey="month"/>


<YAxis/>


<Tooltip/>


<Line

type="monotone"

dataKey="complaints"

stroke="#1565C0"

strokeWidth={3}

/>


</LineChart>


</ResponsiveContainer>

)

}


export default MonthlyComplaintChart;