import {
  Drawer,
  Toolbar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { Link } from "react-router-dom";

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
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: <DashboardIcon />,
  },
  {
    title: "Users",
    path: "/admin/users",
    icon: <PeopleIcon />,
  },
  {
    title: "Officers",
    path: "/admin/officers",
    icon: <EngineeringIcon />,
  },
  {
    title: "Departments",
    path: "/admin/departments",
    icon: <BusinessIcon />,
  },
  {
    title: "Complaints",
    path: "/admin/complaints",
    icon: <AssignmentIcon />,
  },
  {
    title: "Analytics",
    path: "/admin/analytics",
    icon: <AnalyticsIcon />,
  },
  {
    title: "Heatmap",
    path: "/admin/heatmap",
    icon: <MapIcon />,
  },
  {
    title: "Settings",
    path: "/admin/settings",
    icon: <SettingsIcon />,
  },
];

function AdminSidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: drawerWidth,
          background: "#111827",
          color: "#fff",
        },
      }}
    >
      <Toolbar />

      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.title}
            component={Link}
            to={item.path}
            sx={{
              borderRadius: 2,
              mx: 1,

              "&:hover": {
                background: "#2563EB",
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

export default AdminSidebar;