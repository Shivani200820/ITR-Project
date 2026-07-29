import { useState } from "react";

import {
    Badge,
    IconButton,
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";

import NotificationDrawer from "./NotificationDrawer";

import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";


function NotificationBell() {

    const [open, setOpen] = useState(false);


    const notifications = useSelector(
        (state) => state.notifications.notifications
    );


    const unreadCount = notifications.filter(
        (item) => !item.read
    ).length;


    const navigate = useNavigate();


    return (
        <>
            <IconButton
                onClick={() =>
                    navigate("/citizen/notifications")
                }
            >

                <Badge
                    badgeContent={unreadCount}
                    color="error"
                >
                    <NotificationsIcon />
                </Badge>

            </IconButton>


            <NotificationDrawer
                open={open}
                onClose={() => setOpen(false)}
            />

        </>
    );
}


export default NotificationBell;