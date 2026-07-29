import {
Stack,
Button
}
from "@mui/material";


import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

import TableChartIcon from "@mui/icons-material/TableChart";


function ExportButtons(){

return(

<Stack

direction="row"

spacing={2}

mt={3}

>


<Button

variant="contained"

color="error"

startIcon={<PictureAsPdfIcon/>}

>

Export PDF

</Button>


<Button

variant="contained"

color="success"

startIcon={<TableChartIcon/>}

>

Export Excel

</Button>


</Stack>

)

}


export default ExportButtons;