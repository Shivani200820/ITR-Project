import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Typography
} from "@mui/material";


import { citizens } from "./managementData";



function CitizenTable() {


  return (

    <Paper

      sx={{

        p: 3,

        borderRadius: 4

      }}

    >


      <Typography

        variant="h6"

        fontWeight="bold"

        mb={2}

      >

        Citizens

      </Typography>



      <Table>


        <TableHead>


          <TableRow>


            <TableCell>Name</TableCell>

            <TableCell>Email</TableCell>

            <TableCell>Complaints</TableCell>

            <TableCell>Action</TableCell>


          </TableRow>


        </TableHead>




        <TableBody>


          {

            citizens.map((user) => (


              <TableRow key={user.id}>


                <TableCell>
                  {user.name}
                </TableCell>



                <TableCell>
                  {user.email}
                </TableCell>



                <TableCell>
                  {user.complaints}
                </TableCell>




                <TableCell>



                  <Button

                    size="small"

                    variant="outlined"

                  >

                    Edit

                  </Button>




                  <Button

                    size="small"

                    color="error"

                    sx={{ ml: 1 }}

                  >

                    Delete

                  </Button>



                </TableCell>



              </TableRow>


            ))

          }



        </TableBody>


      </Table>


    </Paper>

  );

}


export default CitizenTable;