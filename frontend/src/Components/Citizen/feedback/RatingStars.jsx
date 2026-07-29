import { Rating } from "@mui/material";


function RatingStars({value, setValue}){


return(

<Rating

value={value}

onChange={(event,newValue)=>{

setValue(newValue);

}}

size="large"

/>

)

}


export default RatingStars;