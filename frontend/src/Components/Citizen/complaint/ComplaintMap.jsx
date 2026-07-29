import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import L from "leaflet";

import {
  Paper,
  Typography,
} from "@mui/material";


const complaintLocation = [
  18.5074,
  73.8077
];


const markerIcon = new L.Icon({

  iconUrl:
  "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

  iconSize:[
    25,
    41
  ],

});


function ComplaintMap(){

return(

<Paper

sx={{

p:3,

borderRadius:3

}}

>


<Typography

variant="h6"

fontWeight="bold"

mb={2}

>

Complaint Location

</Typography>



<MapContainer

center={complaintLocation}

zoom={15}

style={{

height:"400px",

width:"100%",

borderRadius:"15px"

}}

>


<TileLayer

url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"

/>



<Marker

position={complaintLocation}

icon={markerIcon}

>


<Popup>

Road Damage Complaint

<br/>

Kothrud, Pune

</Popup>


</Marker>



</MapContainer>



<Typography

mt={2}

color="text.secondary"

>

Latitude:
18.5074

</Typography>


<Typography

color="text.secondary"

>

Longitude:
73.8077

</Typography>



</Paper>

)

}


export default ComplaintMap;