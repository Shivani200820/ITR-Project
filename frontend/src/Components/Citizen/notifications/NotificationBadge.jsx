import {
  Badge,
  IconButton,
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";


function NotificationBadge({count = 0, onClick}) {


  return (

    <IconButton
      color="inherit"
      onClick={onClick}
    >

      <Badge
        badgeContent={count}
        color="error"
        sx={{
          "& .MuiBadge-badge": {
            fontSize: "12px",
            height: "20px",
            minWidth: "20px",
          },
        }}
      >

        <NotificationsIcon />

      </Badge>


    </IconButton>

  );

}


export default NotificationBadge;