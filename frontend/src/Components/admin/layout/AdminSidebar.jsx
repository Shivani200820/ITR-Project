import {
  Drawer,
  Toolbar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";


import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import EngineeringIcon from "@mui/icons-material/Engineering";
import BusinessIcon from "@mui/icons-material/Business";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import MapIcon from "@mui/icons-material/Map";
import SettingsIcon from "@mui/icons-material/Settings";


const drawerWidth = 260;


const menuItems = [

{
 title:"Dashboard",
 icon:<DashboardIcon/>
},

{
 title:"Users",
 icon:<PeopleIcon/>
},

{
 title:"Officers",
 icon:<EngineeringIcon/>
},

{
 title:"Departments",
 icon:<BusinessIcon/>
},

{
 title:"Complaints",
 icon:<AssignmentIcon/>
},

{
 title:"Analytics",
 icon:<AnalyticsIcon/>
},

{
 title:"Heatmap",
 icon:<MapIcon/>
},

{
 title:"Settings",
 icon:<SettingsIcon/>
}

];


function AdminSidebar(){

return (

<Drawer

variant="permanent"

sx={{

width:drawerWidth,

flexShrink:0,


"& .MuiDrawer-paper":{

width:drawerWidth,

background:"#111827",

color:"#fff"

}

}}

>


<Toolbar/>


<List>

{

menuItems.map((item)=>(

<ListItemButton

key={item.title}

sx={{

borderRadius:2,

mx:1,


"&:hover":{

background:"#2563EB"

}

}}

>


<ListItemIcon

sx={{color:"#fff"}}

>

{item.icon}

</ListItemIcon>


<ListItemText

primary={item.title}

/>


</ListItemButton>

))

}


</List>


</Drawer>

)

}


export default AdminSidebar;