import {
  ListItem,
  ListItemText,
  Chip,
  IconButton,
  Stack,
} from "@mui/material";

import { useDispatch } from "react-redux";

import {
  markAsRead,
  deleteNotification,
} from "../../../redux/slices/notificationSlice";

import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";

function NotificationCard({ notification }) {
  const dispatch = useDispatch();

  return (
    <ListItem divider>
      <ListItemText
        primary={notification.title}
        secondary={
          <>
            {notification.message}
            <br />
            {notification.time}
          </>
        }
      />

      <Stack direction="row" spacing={1} alignItems="center">
        {!notification.read && (
          <>
            <Chip
              label="New"
              color="primary"
              size="small"
            />

            <IconButton
              color="success"
              onClick={() =>
                dispatch(markAsRead(notification.id))
              }
            >
              <DoneIcon />
            </IconButton>
          </>
        )}

        <IconButton
          color="error"
          onClick={() =>
            dispatch(deleteNotification(notification.id))
          }
        >
          <DeleteIcon />
        </IconButton>
      </Stack>
    </ListItem>
  );
}

export default NotificationCard;