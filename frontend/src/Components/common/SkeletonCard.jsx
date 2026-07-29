import {
  Card,
  CardContent,
  Skeleton
} from "@mui/material";


function SkeletonCard(){

return(

<Card

sx={{

borderRadius:4

}}

>

<CardContent>


<Skeleton

variant="text"

height={35}

/>


<Skeleton

variant="rectangular"

height={100}

sx={{

mt:2,

borderRadius:3

}}

/>


<Skeleton

variant="text"

height={25}

sx={{

mt:2

}}

/>


</CardContent>


</Card>

)

}


export default SkeletonCard;