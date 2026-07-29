import { useState } from "react";

import {
  Paper,
  Typography,
  TextField,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Stack,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import ComplaintStatusChip from "./ComplaintStatusChip";
import ComplaintActionButtons from "./ComplaintActionButtons";
import EmptyState from "../../common/EmptyState";


const complaintData = [
  {
    id: "CMP-101",
    title: "Road Damage",
    department: "Road",
    status: "Pending",
  },
  {
    id: "CMP-102",
    title: "Garbage Overflow",
    department: "Garbage",
    status: "Resolved",
  },
  {
    id: "CMP-103",
    title: "Water Leakage",
    department: "Water",
    status: "In Progress",
  },
  {
    id: "CMP-104",
    title: "Street Light",
    department: "Electricity",
    status: "Pending",
  },
];


function RecentComplaints() {


  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("");

  const navigate = useNavigate();



  const filtered = complaintData.filter((item) => {


    const matchesSearch =
      item.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      item.id
        .toLowerCase()
        .includes(search.toLowerCase());



    const matchesStatus =
      status === "" ||
      item.status === status;



    return matchesSearch && matchesStatus;


  });




  return (

    <Paper
      sx={{
        mt:4,
        p:3,
        borderRadius:4,
      }}
    >


      <Typography
        variant="h5"
        fontWeight="bold"
        mb={3}
      >
        Recent Complaints
      </Typography>




      <Stack
        direction={{
          xs:"column",
          md:"row"
        }}
        spacing={2}
        mb={3}
      >


        <TextField

          label="Search Complaint"

          fullWidth

          value={search}

          onChange={(e)=>
            setSearch(e.target.value)
          }

        />



        <TextField

          select

          label="Status"

          sx={{
            minWidth:220
          }}

          value={status}

          onChange={(e)=>
            setStatus(e.target.value)
          }

        >


          <MenuItem value="">
            All
          </MenuItem>


          <MenuItem value="Pending">
            Pending
          </MenuItem>


          <MenuItem value="In Progress">
            In Progress
          </MenuItem>


          <MenuItem value="Resolved">
            Resolved
          </MenuItem>


        </TextField>



      </Stack>





      {
        filtered.length === 0 ?


        <EmptyState

          title="No Complaints Found"

          message="No complaints match your search. Register a new civic complaint."

          buttonText="Register Complaint"

          onClick={() =>
            navigate("/citizen/complaint")
          }

        />



        :



        <TableContainer>


          <Table>


            <TableHead>


              <TableRow>


                <TableCell>
                  <strong>ID</strong>
                </TableCell>


                <TableCell>
                  <strong>Complaint</strong>
                </TableCell>


                <TableCell>
                  <strong>Department</strong>
                </TableCell>


                <TableCell>
                  <strong>Status</strong>
                </TableCell>


                <TableCell>
                  <strong>Actions</strong>
                </TableCell>


              </TableRow>


            </TableHead>





            <TableBody>


              {
                filtered.map((item)=>(


                  <TableRow
                    key={item.id}
                    hover
                  >


                    <TableCell>
                      {item.id}
                    </TableCell>



                    <TableCell>
                      {item.title}
                    </TableCell>



                    <TableCell>
                      {item.department}
                    </TableCell>



                    <TableCell>

                      <ComplaintStatusChip
                        status={item.status}
                      />

                    </TableCell>




                    <TableCell>


                      <ComplaintActionButtons

                        complaintId={item.id}


                        onEdit={() =>
                          alert(
                            `Edit Complaint: ${item.id}`
                          )
                        }


                        onDelete={() =>
                          alert(
                            `Delete Complaint: ${item.id}`
                          )
                        }

                      />


                    </TableCell>



                  </TableRow>


                ))
              }



            </TableBody>


          </Table>


        </TableContainer>


      }



    </Paper>

  );

}


export default RecentComplaints;