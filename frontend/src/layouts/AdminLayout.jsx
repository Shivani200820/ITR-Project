import {

Box,

Toolbar

}

from "@mui/material";


import {Outlet} from "react-router-dom";


import AdminSidebar

from "../components/admin/layout/AdminSidebar";


import AdminNavbar

from "../components/admin/layout/AdminNavbar";



function AdminLayout(){


return (

<Box

sx={{

display:"flex"

}}

>


<AdminNavbar/>


<AdminSidebar/>


<Box

component="main"

sx={{

flexGrow:1,

background:"#F8FAFC",

minHeight:"100vh",

p:3

}}

>


<Toolbar/>


<Outlet/>


</Box>


</Box>

)

}


export default AdminLayout;