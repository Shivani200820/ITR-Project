import {

Container,

Grid,

Paper,

Typography

}

from "@mui/material";


import {useState} from "react";


import ProfileCard 
from "../../components/citizen/profile/ProfileCard";


import EditProfileForm
from "../../components/citizen/profile/EditProfileForm";


import ChangePassword
from "../../components/citizen/profile/ChangePassword";



function Profile(){


const [edit,setEdit]=useState(false);



return(

<Container

maxWidth="lg"

sx={{

py:4

}}

>


<Typography

variant="h4"

fontWeight="bold"

mb={3}

>

My Profile

</Typography>




<Grid container spacing={3}>


<Grid item xs={12} md={4}>


<ProfileCard

onEdit={()=>setEdit(true)}

/>


</Grid>




<Grid item xs={12} md={8}>


<Paper

sx={{

p:3,

borderRadius:4

}}

>


{

edit ?

<EditProfileForm

close={()=>setEdit(false)}

/>

:

<ChangePassword/>

}



</Paper>


</Grid>



</Grid>


</Container>

)

}


export default Profile;