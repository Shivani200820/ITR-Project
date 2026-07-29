import { createTheme } from "@mui/material/styles";


const lightTheme = createTheme({

palette:{

mode:"light",

primary:{
main:"#1565C0"
},

secondary:{
main:"#00ACC1"
},

background:{
default:"#F5F7FB",
paper:"#FFFFFF"
},

text:{
primary:"#102A43",
secondary:"#52606D"
}

},


shape:{
borderRadius:14
},


typography:{

fontFamily:"Poppins, Arial, sans-serif"

}

});


export default lightTheme;