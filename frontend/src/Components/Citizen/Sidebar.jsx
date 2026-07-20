import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";


import DashboardIcon from "@mui/icons-material/Dashboard";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";


import { useNavigate } from "react-router-dom";


const menuItems = [

  {
    title:"Dashboard",
    icon:<DashboardIcon />,
    path:"/citizen/dashboard",
  },

  {
    title:"Register Complaint",
    icon:<AddCircleIcon />,
    path:"/citizen/register-complaint",
  },

  {
    title:"My Complaints",
    icon:<AssignmentIcon />,
    path:"/citizen/my-complaints",
  },

  {
    title:"Profile",
    icon:<PersonIcon />,
    path:"/citizen/profile",
  },

];



function Sidebar(){

  const navigate = useNavigate();



  const handleLogout = () => {


    localStorage.removeItem("token");

    localStorage.removeItem("role");


    navigate("/auth");

  };



  return (

    <Drawer

      variant="permanent"

      sx={{

        width:250,

        flexShrink:0,


        "& .MuiDrawer-paper":{

          width:250,

          boxSizing:"border-box",

          bgcolor:"#0D47A1",

          color:"white"

        }

      }}

    >


      <Toolbar />



      <List>


        {menuItems.map((item)=>(


          <ListItemButton

            key={item.title}

            onClick={()=>navigate(item.path)}

            sx={{

              "&:hover":{

                bgcolor:"rgba(255,255,255,0.15)"

              }

            }}

          >


            <ListItemIcon

              sx={{
                color:"white"
              }}

            >

              {item.icon}


            </ListItemIcon>


            <ListItemText

              primary={item.title}

            />


          </ListItemButton>


        ))}



        {/* Logout */}


        <ListItemButton

          onClick={handleLogout}

          sx={{

            mt:2,

            "&:hover":{

              bgcolor:"rgba(255,255,255,0.15)"

            }

          }}

        >

          <ListItemIcon

            sx={{
              color:"white"
            }}

          >

            <LogoutIcon />

          </ListItemIcon>


          <ListItemText

            primary="Logout"

          />


        </ListItemButton>



      </List>



    </Drawer>

  );

}


export default Sidebar;