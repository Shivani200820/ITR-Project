import {
  TableRow,
  TableCell,
} from "@mui/material";

import StatusChip from "./StatusChip";
import UserActionButtons from "./UserActionButtons";

function UserRow({ user }) {
  return (
    <TableRow hover>

      <TableCell>{user.name}</TableCell>

      <TableCell>{user.email}</TableCell>

      <TableCell>{user.role}</TableCell>

      <TableCell>
        <StatusChip status={user.status} />
      </TableCell>

      <TableCell>
        <UserActionButtons />
      </TableCell>

    </TableRow>
  );
}

export default UserRow;