import {
  Box,
  CircularProgress,
  Typography
} from "@mui/material";


function Loader(){

  return(

    <Box

      sx={{

        minHeight:"70vh",

        display:"flex",

        flexDirection:"column",

        justifyContent:"center",

        alignItems:"center"

      }}

    >

      <CircularProgress

        size={55}

        thickness={4}

      />


      <Typography

        mt={3}

        color="text.secondary"

      >

        Loading CivicAI...

      </Typography>


    </Box>

  )

}


export default Loader;