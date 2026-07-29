import {

Table,

TableBody,

TableCell,

TableHead,

TableRow

}

from "@mui/material";


import DepartmentRow from "./DepartmentRow";


const departments=[


{

id:1,

name:"Road Department",

officers:15,

complaints:120,

status:"Active"

},


{

id:2,

name:"Water Supply",

officers:10,

complaints:90,

status:"Active"

},


{

id:3,

name:"Garbage Management",

officers:20,

complaints:140,

status:"Active"

},


{

id:4,

name:"Street Lights",

officers:8,

complaints:65,

status:"Inactive"

}


];



function DepartmentTable(){


return(

<Table>


<TableHead>

<TableRow>


<TableCell>
<strong>Department</strong>
</TableCell>


<TableCell>
<strong>Officers</strong>
</TableCell>


<TableCell>
<strong>Complaints</strong>
</TableCell>


<TableCell>
<strong>Status</strong>
</TableCell>


<TableCell>
<strong>Actions</strong>
</TableCell>


</TableRow>

</TableHead>



<TableBody>


{

departments.map((dept)=>(

<DepartmentRow

key={dept.id}

department={dept}

/>

))

}


</TableBody>


</Table>

)

}


export default DepartmentTable;