
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notifications: [
    {
      id: 1,
      title: "Complaint Submitted",
      message: "Your complaint has been submitted.",
      time: "2 min ago",
      read: false,
    },
    {
      id: 2,
      title: "Complaint Accepted",
      message: "Officer accepted your complaint.",
      time: "1 hour ago",
      read: false,
    },
    {
      id: 3,
      title: "Complaint Resolved",
      message: "Repair work completed.",
      time: "Yesterday",
      read: true,
    },
  ],
};

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    markAsRead: (state, action) => {
      const notification = state.notifications.find(
        (item) => item.id === action.payload
      );

      if (notification) {
        notification.read = true;
      }
    },

    deleteNotification: (state, action) => {
      state.notifications = state.notifications.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  markAsRead,
  deleteNotification,
} = notificationSlice.actions;

export default notificationSlice.reducer;