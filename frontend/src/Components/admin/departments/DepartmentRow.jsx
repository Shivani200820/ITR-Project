import {
TableRow,
TableCell
}
from "@mui/material";


import DepartmentStatusChip from "./DepartmentStatusChip";

import DepartmentActionButtons from "./DepartmentActionButtons";


function DepartmentRow({department}){


return(

<TableRow hover>


<TableCell>

{department.name}

</TableCell>


<TableCell>

{department.officers}

</TableCell>


<TableCell>

{department.complaints}

</TableCell>


<TableCell>

<DepartmentStatusChip

status={department.status}

/>

</TableCell>


<TableCell>

<DepartmentActionButtons/>

</TableCell>


</TableRow>

)

}


export default DepartmentRow;