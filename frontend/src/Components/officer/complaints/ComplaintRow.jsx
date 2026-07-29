import {
    TableRow,
    TableCell,
    Button,
    Chip
} from "@mui/material";


import StatusChip from "./StatusChip";

import { useState } from "react";

import ComplaintDetailsDialog from "./ComplaintDetailsDialog";

import UpdateStatusDialog from "./UpdateStatusDialog";



function ComplaintRow({ complaint }) {


    const [open, setOpen] = useState(false);

    const [updateOpen, setUpdateOpen] = useState(false);



    return (

        <TableRow hover>


            <TableCell>
                {complaint.id}
            </TableCell>


            <TableCell>
                {complaint.citizen}
            </TableCell>


            <TableCell>
                {complaint.category}
            </TableCell>



            <TableCell>

                <Chip

                    label={complaint.priority}

                    color={
                        complaint.priority === "High"
                            ?
                            "error"
                            :
                            complaint.priority === "Medium"
                                ?
                                "warning"
                                :
                                "success"
                    }

                />

            </TableCell>



            <TableCell>

                <StatusChip

                    status={complaint.status}

                />

            </TableCell>



            <TableCell>
                {complaint.location}
            </TableCell>




            <TableCell>


                {/* View Button */}

                <Button

                    variant="outlined"

                    size="small"

                    onClick={() => setOpen(true)}

                >

                    View

                </Button>




                <Button

                    variant="contained"

                    size="small"

                    sx={{ ml: 1 }}

                    onClick={() => setUpdateOpen(true)}

                >

                    Update

                </Button>





                {/* Complaint Details Dialog */}

                <ComplaintDetailsDialog

                    open={open}

                    handleClose={() => setOpen(false)}

                    complaint={complaint}

                />




                {/* Update Status Dialog */}

                <UpdateStatusDialog

                    open={updateOpen}

                    handleClose={() => setUpdateOpen(false)}

                    complaint={complaint}

                />



            </TableCell>



        </TableRow>


    );

}


export default ComplaintRow;