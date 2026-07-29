import {
createContext,
useState
}
from "react";


import {
ThemeProvider
}
from "@mui/material/styles";


import lightTheme from "./lightTheme";

import darkTheme from "./darkTheme";



export const ColorModeContext = createContext();



function ThemeContext({children}){


const [mode,setMode]=useState(

localStorage.getItem("theme") || "light"

);



const toggleTheme=()=>{


const newMode =

mode==="light"

?"dark"

:"light";


setMode(newMode);


localStorage.setItem(
"theme",
newMode
);


};



return(

<ColorModeContext.Provider

value={{

mode,

toggleTheme

}}

>


<ThemeProvider

theme={

mode==="light"

?lightTheme

:darkTheme

}

>


{children}


</ThemeProvider>



</ColorModeContext.Provider>


)

}


export default ThemeContext;