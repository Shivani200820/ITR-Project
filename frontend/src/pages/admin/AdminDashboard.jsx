import DashboardStats from "../../components/admin/dashboard/DashboardStats";
import MonthlyComplaintsChart from "../../components/admin/dashboard/MonthlyComplaintsChart";
import DepartmentPieChart from "../../components/admin/dashboard/DepartmentPieChart";
import RecentActivities from "../../components/admin/dashboard/RecentActivities";
import QuickActions from "../../components/admin/dashboard/QuickActions";
import DepartmentPerformanceTable from "../../components/admin/dashboard/DepartmentPerformanceTable";
import {

Typography,

Paper

}


from "@mui/material";


function AdminDashboard(){


return (

<>

<Typography

variant="h4"

fontWeight="bold"

>

Welcome Admin 👨‍💼

</Typography>



<Paper

sx={{

mt:3,

p:5,

borderRadius:4

}}

>


<Typography>

Admin Control Center

</Typography>


</Paper>


</>

)

}


export default AdminDashboard;