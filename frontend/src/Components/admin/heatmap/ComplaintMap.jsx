import {
 MapContainer,
 TileLayer,
 Marker,
 Popup
} from "react-leaflet";


import L from "leaflet";


const complaints=[

{
 id:1,
 title:"Road Damage",
 location:[18.5204,73.8567],
 priority:"High"
},

{
 id:2,
 title:"Garbage Issue",
 location:[18.5314,73.8446],
 priority:"Medium"
},

{
 id:3,
 title:"Street Light",
 location:[18.5074,73.8077],
 priority:"Low"
}

];



const icon = new L.Icon({

iconUrl:
"https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

iconSize:[25,41],

});


function ComplaintMap(){


return(

<MapContainer

center={[18.5204,73.8567]}

zoom={12}

style={{

height:"500px",

width:"100%",

borderRadius:"20px"

}}

>


<TileLayer

url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"

/>



{

complaints.map((item)=>(


<Marker

key={item.id}

position={item.location}

icon={icon}

>


<Popup>


<h3>

{item.title}

</h3>


<p>

Priority:
{item.priority}

</p>


</Popup>


</Marker>


))

}



</MapContainer>

)

}


export default ComplaintMap;