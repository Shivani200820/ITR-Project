import {Chip} from "@mui/material";


function StatusChip({status}){


let color="default";


if(status==="Pending")
 color="warning";


if(status==="In Progress")
 color="info";


if(status==="Resolved")
 color="success";



return(

<Chip

label={status}

color={color}

size="small"

/>

)

}


export default StatusChip;