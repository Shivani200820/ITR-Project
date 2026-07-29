import {
  createContext,
  useState
} from "react";


import {
  CircularProgress,
  Box
} from "@mui/material";


export const LoadingContext = createContext();



function LoadingProvider({children}){


const [loading,setLoading]=useState(false);



const showLoader=()=>{

setLoading(true);

};



const hideLoader=()=>{

setLoading(false);

};



return(

<LoadingContext.Provider

value={{
loading,
showLoader,
hideLoader
}}

>


{children}



{
loading && (

<Box

sx={{

position:"fixed",

top:0,

left:0,

width:"100%",

height:"100vh",

display:"flex",

alignItems:"center",

justifyContent:"center",

background:"rgba(255,255,255,0.5)",

zIndex:9999

}}

>


<CircularProgress size={60}/>


</Box>

)

}



</LoadingContext.Provider>

)


}


export default LoadingProvider;