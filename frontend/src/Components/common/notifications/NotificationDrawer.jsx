import {
    Drawer,
    Typography,
    List,
} from "@mui/material";

import NotificationCard from "./NotificationCard";
import { useSelector } from "react-redux";

function NotificationDrawer({

    open,
    onClose,
}) {
    const notifications = useSelector(
        (state) => state.notifications.notifications
    );
    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
        >
            <Typography
                variant="h5"
                sx={{ p: 3 }}
            >
                Notifications
            </Typography>

            <List sx={{ width: 380 }}>
                {notifications.map((item) => (
                    <NotificationCard
                        key={item.id}
                        notification={item}
                    />
                ))}
            </List>
        </Drawer>
    );
}

export default NotificationDrawer;