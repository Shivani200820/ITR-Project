import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";


import activities from "./activityData";



function ActivityTable() {


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

        System Activity Logs

      </Typography>




      <Table>


        <TableHead>


          <TableRow>


            <TableCell>
              Activity
            </TableCell>


            <TableCell>
              User
            </TableCell>


            <TableCell>
              Type
            </TableCell>


            <TableCell>
              Time
            </TableCell>


          </TableRow>


        </TableHead>




        <TableBody>


          {

            activities.map((item) => (


              <TableRow key={item.id}>


                <TableCell>
                  {item.title}
                </TableCell>



                <TableCell>
                  {item.user}
                </TableCell>



                <TableCell>
                  {item.type}
                </TableCell>



                <TableCell>
                  {item.time}
                </TableCell>



              </TableRow>


            ))

          }



        </TableBody>



      </Table>



    </Paper>

  );

}


export default ActivityTable;