import {

Table,

TableBody,

TableCell,

TableHead,

TableRow

}

from "@mui/material";


const reports=[

{
id:101,
category:"Road Damage",
department:"Road",
status:"Resolved"
},

{
id:102,
category:"Garbage Issue",
department:"Sanitation",
status:"Pending"
},

{
id:103,
category:"Water Leakage",
department:"Water",
status:"Resolved"
}

];


function ReportTable(){

return(

<Table>


<TableHead>

<TableRow>

<TableCell>
<strong>ID</strong>
</TableCell>

<TableCell>
<strong>Category</strong>
</TableCell>

<TableCell>
<strong>Department</strong>
</TableCell>

<TableCell>
<strong>Status</strong>
</TableCell>

</TableRow>

</TableHead>


<TableBody>


{

reports.map((item)=>(


<TableRow key={item.id}>


<TableCell>
{item.id}
</TableCell>


<TableCell>
{item.category}
</TableCell>


<TableCell>
{item.department}
</TableCell>


<TableCell>
{item.status}
</TableCell>


</TableRow>


))

}


</TableBody>


</Table>

)

}


export default ReportTable;