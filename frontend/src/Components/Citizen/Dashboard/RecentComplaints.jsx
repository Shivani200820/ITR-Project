import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@mui/material";

const complaints = [
  {
    id: 1,
    title: "Road Damage",
    status: "Pending",
    priority: "High",
  },
  {
    id: 2,
    title: "Garbage Overflow",
    status: "Resolved",
    priority: "Medium",
  },
  {
    id: 3,
    title: "Street Light",
    status: "In Progress",
    priority: "Low",
  },
];

function RecentComplaints() {
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography
        variant="h6"
        mb={3}
        fontWeight="bold"
      >
        Recent Complaints
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Complaint</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Priority</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {complaints.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>{item.priority}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default RecentComplaints;