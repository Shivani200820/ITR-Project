import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  TextField,
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";

function OfficerNavbar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "#ffffff",
        color: "#000",
        borderBottom: "1px solid #E5E7EB",
        ml: "260px",
        width: "calc(100% - 260px)",
      }}
    >
      <Toolbar>

        <Typography
          variant="h6"
          fontWeight={700}
        >
          Officer Dashboard
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <TextField
          size="small"
          placeholder="Search complaints..."
          sx={{
            width: 300,
            mr: 2,
          }}
        />

        <IconButton>
          <NotificationsIcon />
        </IconButton>

      </Toolbar>
    </AppBar>
  );
}

export default OfficerNavbar;