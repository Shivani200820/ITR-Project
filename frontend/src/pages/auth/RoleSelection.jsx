import {
  Box,
  Typography,
  Paper,
  Grid,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import EngineeringIcon from "@mui/icons-material/Engineering";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

import { useNavigate } from "react-router-dom";
const roles = [
  {
    title: "Citizen",
    icon: <PersonIcon sx={{ fontSize: 50 }} color="primary" />,
    path: "/login/citizen",
  },
  {
    title: "Officer",
    icon: <EngineeringIcon sx={{ fontSize: 50 }} color="warning" />,
    path: "/login/officer",
  },
  {
    title: "Admin",
    icon: <AdminPanelSettingsIcon sx={{ fontSize: 50 }} color="error" />,
    path: "/login/admin",
  },
];
function RoleSelection() {

const navigate = useNavigate();

return (

<Box>

<Typography
variant="h4"
fontWeight="bold"
textAlign="center"
mb={5}
>
Choose Login Type
</Typography>

<Grid container spacing={3}>

{roles.map((role)=>(

<Grid item xs={12} key={role.title}>

<Paper

onClick={()=>navigate(role.path)}

sx={{

p:4,

cursor:"pointer",

textAlign:"center",

borderRadius:4,

transition:"0.3s",

"&:hover":{

transform:"translateY(-8px)",

background:"#E3F2FD"

}

}}

>

{role.icon}

<Typography
mt={2}
fontWeight="bold"
variant="h6"
>

{role.title}

</Typography>

</Paper>

</Grid>

))}

</Grid>

</Box>

)

}

export default RoleSelection