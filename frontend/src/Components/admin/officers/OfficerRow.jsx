import {

TableRow,

TableCell

}

from "@mui/material";


import OfficerStatusChip from "./OfficerStatusChip";

import OfficerActionButtons from "./OfficerActionButtons";



function OfficerRow({officer}){


return(

<TableRow hover>


<TableCell>
{officer.name}
</TableCell>


<TableCell>
{officer.email}
</TableCell>


<TableCell>
{officer.department}
</TableCell>


<TableCell>

<OfficerStatusChip

status={officer.status}

/>

</TableCell>



<TableCell>

<OfficerActionButtons/>

</TableCell>


</TableRow>

)

}


export default OfficerRow;