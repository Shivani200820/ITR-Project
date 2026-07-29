import {
  Drawer,
  Toolbar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 260;

const menuItems = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    title: "Complaints",
    icon: <AssignmentIcon />,
  },
  {
    title: "Analytics",
    icon: <AnalyticsIcon />,
  },
  {
    title: "Profile",
    icon: <PersonIcon />,
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
  },
  {
    title: "Logout",
    icon: <LogoutIcon />,
  },
];

function OfficerSidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          background: "#0F172A",
          color: "#fff",
        },
      }}
    >
      <Toolbar />

      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.title}
            sx={{
              mx: 1,
              my: 0.5,
              borderRadius: 2,

              "&:hover": {
                backgroundColor: "#1E40AF",
              },
            }}
          >
            <ListItemIcon sx={{ color: "#fff" }}>
              {item.icon}
            </ListItemIcon>

            <ListItemText primary={item.title} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}

export default OfficerSidebar;