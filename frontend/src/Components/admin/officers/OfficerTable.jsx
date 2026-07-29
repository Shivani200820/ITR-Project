import {

Table,

TableBody,

TableCell,

TableHead,

TableRow

}

from "@mui/material";


import OfficerRow from "./OfficerRow";



const officers=[

{

id:1,

name:"Rahul Patil",

email:"rahul@gmail.com",

department:"Road Department",

status:"Active"

},


{

id:2,

name:"Amit Sharma",

email:"amit@gmail.com",

department:"Water Supply",

status:"Active"

},


{

id:3,

name:"Priya Singh",

email:"priya@gmail.com",

department:"Garbage Management",

status:"Blocked"

}

];



function OfficerTable(){


return(

<Table>


<TableHead>


<TableRow>


<TableCell>
<strong>Name</strong>
</TableCell>


<TableCell>
<strong>Email</strong>
</TableCell>


<TableCell>
<strong>Department</strong>
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

officers.map((officer)=>(


<OfficerRow

key={officer.id}

officer={officer}

/>


))

}


</TableBody>


</Table>

)

}


export default OfficerTable;