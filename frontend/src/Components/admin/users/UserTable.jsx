import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

import UserRow from "./UserRow";

const users = [
  {
    id: 1,
    name: "Gauri Chikhale",
    email: "gauri@gmail.com",
    role: "Citizen",
    status: "Active",
  },
  {
    id: 2,
    name: "Rahul Patil",
    email: "rahul@gmail.com",
    role: "Officer",
    status: "Active",
  },
  {
    id: 3,
    name: "Priya Sharma",
    email: "priya@gmail.com",
    role: "Admin",
    status: "Active",
  },
];

function UserTable() {
  return (
    <Table>

      <TableHead>
        <TableRow>
          <TableCell><strong>Name</strong></TableCell>
          <TableCell><strong>Email</strong></TableCell>
          <TableCell><strong>Role</strong></TableCell>
          <TableCell><strong>Status</strong></TableCell>
          <TableCell><strong>Actions</strong></TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {users.map((user) => (
          <UserRow
            key={user.id}
            user={user}
          />
        ))}
      </TableBody>

    </Table>
  );
}

export default UserTable;