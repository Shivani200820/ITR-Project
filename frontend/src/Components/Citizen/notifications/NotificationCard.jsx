import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack
} from "@mui/material";


function NotificationCard({notification}){


return(

<Card

sx={{

borderRadius:3,

mb:2,

background:

notification.read

?

"#ffffff"

:

"#EEF6FF"

}}

>


<CardContent>


<Stack

direction="row"

justifyContent="space-between"

>


<Typography

variant="h6"

fontWeight="bold"

>

{notification.title}

</Typography>



{

!notification.read &&

<Chip

label="New"

color="primary"

size="small"

/>

}


</Stack>



<Typography

mt={1}

color="text.secondary"

>

{notification.message}

</Typography>



<Typography

mt={2}

fontSize={13}

color="gray"

>

{notification.time}

</Typography>


</CardContent>


</Card>

)

}


export default NotificationCard;