import { createTheme } from "@mui/material/styles";


const darkTheme = createTheme({

palette:{

mode:"dark",


primary:{
main:"#90CAF9"
},


secondary:{
main:"#80DEEA"
},


background:{

default:"#121212",

paper:"#1E1E1E"

},


text:{

primary:"#FFFFFF",

secondary:"#B0BEC5"

}


},



shape:{

borderRadius:14

},



typography:{

fontFamily:"Poppins, Arial, sans-serif"

}


});


export default darkTheme;