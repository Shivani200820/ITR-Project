import {
  createContext,
  useState
} from "react";


import {
  Snackbar,
  Alert
} from "@mui/material";


export const NotificationContext = createContext();



function NotificationProvider({children}){


const [notification,setNotification]=useState({

open:false,

message:"",

severity:"success"

});



const showNotification=(message,severity="success")=>{


setNotification({

open:true,

message,

severity

});


};



const handleClose=()=>{


setNotification({

...notification,

open:false

});


};



return(

<NotificationContext.Provider

value={{
showNotification
}}

>


{children}



<Snackbar

open={notification.open}

autoHideDuration={3000}

onClose={handleClose}

anchorOrigin={{
vertical:"top",
horizontal:"right"
}}

>


<Alert

severity={notification.severity}

onClose={handleClose}

variant="filled"

>


{notification.message}


</Alert>


</Snackbar>



</NotificationContext.Provider>


)


}


export default NotificationProvider;