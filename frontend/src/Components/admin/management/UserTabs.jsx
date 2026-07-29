import { useState } from "react";

import {
  Tabs,
  Tab,
  Box,
  Paper,
} from "@mui/material";


function UserTabs({ onChange }) {

  const [value, setValue] = useState(0);


  const handleChange = (event, newValue) => {

    setValue(newValue);

    if(onChange){
      onChange(newValue);
    }

  };


  return (

    <Paper
      sx={{
        mb:3,
        borderRadius:3,
        overflow:"hidden"
      }}
    >

      <Box>

        <Tabs

          value={value}

          onChange={handleChange}

          variant="fullWidth"

          sx={{
            minHeight:60
          }}

        >

          <Tab label="Citizens" />

          <Tab label="Officers" />

          <Tab label="Departments" />

        </Tabs>


      </Box>


    </Paper>

  );

}


export default UserTabs;