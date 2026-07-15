import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Avatar,
  Stack,
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";

function DashboardHeader() {
  return (
    <AppBar
      position="static"
      color="inherit"
      elevation={1}
    >
      <Toolbar>

        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
        >
          Citizen Dashboard
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
        >
          <IconButton>
            <Badge
              badgeContent={3}
              color="error"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <Avatar />
        </Stack>

      </Toolbar>
    </AppBar>
  );
}

export default DashboardHeader;