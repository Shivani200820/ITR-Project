import {
  Paper,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Chip,
} from "@mui/material";

const departments = [
  {
    id: 1,
    department: "Road Department",
    total: 120,
    resolved: 105,
    pending: 15,
    performance: "Excellent",
  },
  {
    id: 2,
    department: "Water Supply",
    total: 90,
    resolved: 75,
    pending: 15,
    performance: "Good",
  },
  {
    id: 3,
    department: "Garbage Management",
    total: 140,
    resolved: 120,
    pending: 20,
    performance: "Excellent",
  },
  {
    id: 4,
    department: "Street Lights",
    total: 65,
    resolved: 50,
    pending: 15,
    performance: "Average",
  },
  {
    id: 5,
    department: "Public Parks",
    total: 40,
    resolved: 35,
    pending: 5,
    performance: "Good",
  },
];

function getChipColor(status) {
  switch (status) {
    case "Excellent":
      return "success";
    case "Good":
      return "primary";
    case "Average":
      return "warning";
    default:
      return "default";
  }
}

function DepartmentPerformanceTable() {
  return (
    <Paper
      elevation={0}
      sx={{
        mt: 4,
        p: 3,
        borderRadius: 4,
        border: "1px solid #E5E7EB",
      }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        mb={3}
      >
        Department Performance
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Department</strong>
            </TableCell>

            <TableCell align="center">
              <strong>Total Complaints</strong>
            </TableCell>

            <TableCell align="center">
              <strong>Resolved</strong>
            </TableCell>

            <TableCell align="center">
              <strong>Pending</strong>
            </TableCell>

            <TableCell align="center">
              <strong>Performance</strong>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {departments.map((dept) => (
            <TableRow
              key={dept.id}
              hover
            >
              <TableCell>{dept.department}</TableCell>

              <TableCell align="center">
                {dept.total}
              </TableCell>

              <TableCell align="center">
                {dept.resolved}
              </TableCell>

              <TableCell align="center">
                {dept.pending}
              </TableCell>

              <TableCell align="center">
                <Chip
                  label={dept.performance}
                  color={getChipColor(dept.performance)}
                  size="small"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default DepartmentPerformanceTable;