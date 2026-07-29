import {Chip} from "@mui/material";


function DepartmentStatusChip({status}){


return(

<Chip

label={status}

color={
status==="Active"
?
"success"
:
"error"
}

size="small"

/>

)

}


export default DepartmentStatusChip;