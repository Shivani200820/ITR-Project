import NotificationCard from "./NotificationCard";


const notificationData=[

{
id:1,

title:"Complaint Submitted",

message:
"Your road damage complaint has been registered.",

time:"2 min ago",

read:false

},


{
id:2,

title:"Officer Assigned",

message:
"Road department officer assigned to your complaint.",

time:"1 hour ago",

read:false

},


{
id:3,

title:"Complaint Resolved",

message:
"Your complaint has been successfully resolved.",

time:"Yesterday",

read:true

}


];


function NotificationList(){


return(

<>

{

notificationData.map((item)=>(

<NotificationCard

key={item.id}

notification={item}

/>

))

}


</>

)

}


export default NotificationList;