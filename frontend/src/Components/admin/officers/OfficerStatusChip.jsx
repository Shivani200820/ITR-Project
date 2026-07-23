import {Chip} from "@mui/material";


function OfficerStatusChip({status}){


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


export default OfficerStatusChip;