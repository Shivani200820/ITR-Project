import {
  Paper,
  Typography,
  Chip,
  Stack
} from "@mui/material";


function AIModelCard(){

return(

<Paper

sx={{

p:4,

borderRadius:4

}}

>


<Typography

variant="h6"

fontWeight="bold"

mb={3}

>

🤖 AI Model Status

</Typography>



<Stack spacing={2}>


<Typography>
Model Name: Gemini Vision AI
</Typography>


<Typography>
Version: 2.0
</Typography>


<Typography>
Last Updated: 20 July 2026
</Typography>


<Chip

label="Active"

color="success"

sx={{
width:"fit-content"
}}

/>


</Stack>


</Paper>

)

}


export default AIModelCard;