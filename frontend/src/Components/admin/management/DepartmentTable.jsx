import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@mui/material";


import { departments } from "./managementData";



function DepartmentTable() {


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

        Departments

      </Typography>




      <Table>


        <TableHead>


          <TableRow>


            <TableCell>
              Department
            </TableCell>


            <TableCell>
              Officers
            </TableCell>


          </TableRow>


        </TableHead>




        <TableBody>


          {

            departments.map((item) => (


              <TableRow key={item.id}>


                <TableCell>
                  {item.name}
                </TableCell>



                <TableCell>
                  {item.officers}
                </TableCell>



              </TableRow>


            ))

          }



        </TableBody>



      </Table>



    </Paper>

  );

}


export default DepartmentTable;