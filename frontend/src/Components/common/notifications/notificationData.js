import { useSelector } from "react-redux";
const notifications = useSelector(
  (state) => state.notifications.notifications
);
const notifications = [
  {
    id: 1,
    title: "Complaint Submitted",
    message: "Your complaint has been registered successfully.",
    time: "2 min ago",
    read: false,
  },
  {
    id: 2,
    title: "Complaint Accepted",
    message: "Road Department accepted your complaint.",
    time: "1 hour ago",
    read: false,
  },
  {
    id: 3,
    title: "Complaint Resolved",
    message: "Repair work has been completed.",
    time: "Yesterday",
    read: true,
  },
];

export default notifications;