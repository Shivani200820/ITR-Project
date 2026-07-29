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


import { officers } from "./managementData";



function OfficerTable() {


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

        Officers

      </Typography>




      <Table>


        <TableHead>


          <TableRow>


            <TableCell>
              Name
            </TableCell>


            <TableCell>
              Department
            </TableCell>


            <TableCell>
              Handled Complaints
            </TableCell>


            <TableCell>
              Action
            </TableCell>


          </TableRow>


        </TableHead>




        <TableBody>


          {

            officers.map((item) => (


              <TableRow key={item.id}>


                <TableCell>
                  {item.name}
                </TableCell>



                <TableCell>
                  {item.department}
                </TableCell>



                <TableCell>
                  {item.complaints}
                </TableCell>



                <TableCell>



                  <Button

                    variant="outlined"

                  >

                    Edit

                  </Button>




                  <Button

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


export default OfficerTable;