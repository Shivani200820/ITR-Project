import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";


import complaintData from "./complaintData";

import ComplaintRow from "./ComplaintRow";


function ComplaintTable() {


  return (

    <Paper
      sx={{
        p: 3,
        borderRadius: 4
      }}
    >


      <Typography
        variant="h5"
        fontWeight="bold"
        mb={3}
      >
        Assigned Complaints
      </Typography>



      <Table>


        <TableHead>

          <TableRow>

            <TableCell>ID</TableCell>

            <TableCell>Citizen</TableCell>

            <TableCell>Category</TableCell>

            <TableCell>Priority</TableCell>

            <TableCell>Status</TableCell>

            <TableCell>Location</TableCell>

            <TableCell>Action</TableCell>

          </TableRow>

        </TableHead>



        <TableBody>


          {
            complaintData.map((item) => (

              <ComplaintRow
                key={item.id}
                complaint={item}
              />

            ))
          }


        </TableBody>


      </Table>


    </Paper>

  );

}


export default ComplaintTable;