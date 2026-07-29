import {
  TextField,
  Button,
  Stack
} from "@mui/material";


function SearchFilter() {


  return (

    <Stack

      direction="row"

      spacing={2}

      mb={3}

    >


      <TextField

        label="Search"

        placeholder="Search user..."

        fullWidth

      />



      <Button

        variant="contained"

      >

        Add New

      </Button>



    </Stack>

  );

}


export default SearchFilter;